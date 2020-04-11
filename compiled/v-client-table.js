"use strict";

var _vuex = _interopRequireDefault(require("./state/vuex"));

var _normal = _interopRequireDefault(require("./state/normal"));

var _merge = _interopRequireDefault(require("merge"));

var _table = _interopRequireDefault(require("./table"));

var _data2 = _interopRequireDefault(require("./state/data"));

var _resizeableColumns = _interopRequireDefault(require("./helpers/resizeable-columns"));

var _VtClientTable = _interopRequireDefault(require("./components/VtClientTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _data = require("./mixins/data");

var _created = require("./mixins/created");

var provide = require("./mixins/provide");

var themes = {
  bootstrap3: require('./themes/bootstrap3')(),
  bootstrap4: require('./themes/bootstrap4')(),
  bulma: require('./themes/bulma')()
};

exports.install = function (Vue, globalOptions, useVuex) {
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "bootstrap3";
  var componentsOverride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var client = _merge["default"].recursive(true, (0, _table["default"])(), {
    name: "r-l-client-table",
    render: require('./components/renderless/RLDataTable'),
    provide: provide,
    props: {
      columns: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      },
      name: {
        type: String,
        required: false
      },
      options: {
        type: Object,
        required: false,
        "default": function _default() {
          return {};
        }
      }
    },
    created: function created() {
      _created(this);

      if (this.opts.toMomentFormat) this.transformDateStringsToMoment();

      if (!this.vuex) {
        this.initOrderBy();
        this.query = this.initQuery();
        this.customQueries = this.initCustomFilters();
      }
    },
    mounted: function mounted() {
      var _this = this;

      // if (this.opts.pagination.infinite) {
      //     this.lastRecord = this.limit
      //     this.$watch('query', () => {
      //         this.lastRecord = this.limit
      //         this.applyInfiniteScroll();
      //     }, {
      //         deep: true
      //     });
      //
      //     this.$watch('orderBy', () => {
      //         this.lastRecord = this.limit
      //         this.applyInfiniteScroll();
      //     }, {
      //         deep: true
      //     });
      //
      //     this.applyInfiniteScroll();
      // }
      this._setFiltersDOM(this.query);

      if (this.opts.resizableColumns) {
        (0, _resizeableColumns["default"])(this.$el.querySelector("table"), this.hasChildRow, this.opts.childRowTogglerFirst);
      } // this._setColumnsDropdownCloseListener();


      if (!this.vuex) {
        this.registerClientFilters();
        if (this.options.initialPage) this.setPage(this.options.initialPage);
      }

      if (this.opts.groupBy && !this.opts.orderBy) {
        this.orderBy.column = this.opts.groupBy;
      }

      this.loadState();

      if (this.hasDateFilters()) {
        this.initDateFilters();
      } // listen for data being removed
      // and nav to last page if current page is greater than total pages


      this.$watch('data', function () {
        if (_this.page > _this.totalPages) {
          _this.setPage(_this.totalPages);
        }
      });
    },
    model: {
      prop: "data"
    },
    data: function data() {
      return _merge["default"].recursive(_data(), {
        source: "client",
        theme: typeof theme === 'string' ? themes[theme] : theme(),
        globalOptions: globalOptions,
        componentsOverride: componentsOverride,
        currentlySorting: {},
        time: Date.now()
      }, (0, _data2["default"])(useVuex, "client", this.options.initialPage));
    },
    computed: {
      q: require("./computed/q"),
      customQ: require("./computed/custom-q"),
      totalPages: require("./computed/total-pages"),
      filteredData: require("./computed/filtered-data"),
      hasMultiSort: function hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },
    methods: {
      applyInfiniteScroll: function applyInfiniteScroll() {
        var _this2 = this;

        var lastTime = new Date().getTime();
        this.currentTarget = this.$el.querySelector('tbody').lastElementChild;
        var first = this.$el.querySelector('tbody').firstElementChild;
        this.$nextTick(function () {
          var nextObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
              if (e.isIntersecting && new Date().getTime() - lastTime > 10) {
                _this2.setPage(_this2.page + 1);

                lastTime = new Date();
                console.log("intersection" + _this2.page);

                _this2.$nextTick(function () {
                  nextObserver.unobserve(_this2.currentTarget);

                  _this2.applyInfiniteScroll();
                });
              } else {
                console.log("no interseciton");
              }
            });
          }, {
            root: _this2.$el.querySelector('.table-responsive') // rootMargin: '-30px',
            // threshold: 1.0

          });
          var prevObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
              if (e.isIntersecting) {
                console.log("intersection");

                _this2.setPage(_this2.page - 1);

                _this2.$nextTick(function () {
                  prevObserver.unobserve(first);

                  _this2.applyInfiniteScroll();
                });
              } else {
                console.log("no interseciton");
              }
            });
          }, {
            root: _this2.$el.querySelector('.table-responsive'),
            rootMargin: '0px',
            threshold: 1.0
          });

          _this2.$nextTick(function () {
            if (_this2.currentTarget) {
              nextObserver.observe(_this2.currentTarget);
            }

            prevObserver.observe(first);
          });
        });
      },
      transformDateStringsToMoment: require("./methods/transform-date-strings-to-moment"),
      registerClientFilters: require("./methods/register-client-filters"),
      search: require("./methods/client-search"),
      defaultSort: require("./methods/default-sort"),
      getGroupSlot: require("./methods/get-group-slot"),
      toggleGroup: function toggleGroup(group, e) {
        e.stopPropagation();
        var i = this.collapsedGroups.indexOf(group);

        if (i >= 0) {
          this.collapsedGroups.splice(i, 1);
        } else {
          this.collapsedGroups.push(group);
        }
      },
      groupToggleIcon: function groupToggleIcon(group) {
        var cls = this.opts.sortIcon.base + " ";
        cls += this.collapsedGroups.indexOf(group) > -1 ? this.opts.sortIcon.down : this.opts.sortIcon.up;
        return cls;
      },
      loadState: function loadState() {
        if (!this.opts.saveState) return;

        if (!this.storage.getItem(this.stateKey)) {
          this.initState();
          this.activeState = true;
          return;
        }

        var state = JSON.parse(this.storage.getItem(this.stateKey));
        if (this.opts.filterable) this.setFilter(state.query);
        this.setOrder(state.orderBy.column, state.orderBy.ascending);

        if (this.vuex) {
          this.commit("SET_LIMIT", state.perPage);
        } else {
          this.limit = state.perPage;
        }

        this.setPage(state.page);
        this.activeState = true;

        if (state.userControlsColumns) {
          this.userColumnsDisplay = state.userColumnsDisplay;
          this.userControlsColumns = state.userControlsColumns;
        } // TODO: Custom Queries

      }
    }
  });

  var state = useVuex ? (0, _vuex["default"])() : (0, _normal["default"])();
  client = _merge["default"].recursive(client, state);
  Vue.component("r-l-client-table", client);
  Vue.component("v-client-table", _VtClientTable["default"]);
  return _VtClientTable["default"];
};