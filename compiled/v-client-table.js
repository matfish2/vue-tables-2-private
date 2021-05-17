"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = install;

var _vuex = _interopRequireDefault(require("./state/vuex"));

var _normal = _interopRequireDefault(require("./state/normal"));

var _merge = _interopRequireDefault(require("merge"));

var _data2 = _interopRequireDefault(require("./state/data"));

var _resizeableColumns = _interopRequireDefault(require("./helpers/resizeable-columns"));

var _VtClientTable = _interopRequireDefault(require("./components/VtClientTable"));

var _table = _interopRequireDefault(require("./table"));

var _themes = _interopRequireDefault(require("./themes/themes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _data = require("./mixins/data");

var _created = require("./mixins/created");

var provide = require("./mixins/provide");

function install(app, globalOptions) {
  var theme = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "bootstrap3";
  var componentsOverride = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var themeOverride = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var useVuex = false;

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

      this._setFiltersDOM(this.query);

      if (this.opts.resizableColumns) {
        (0, _resizeableColumns["default"])(this.refs.table, this.hasChildRow, this.opts.childRowTogglerFirst, this.resizableColumns, this.opts.stickyHeader);
      }

      if (this.groupBy && this.groupBy.length > 1) {
        this.options.multiSorting = {};
        this.options.multiSorting[this.groupBy[0]] = [{
          column: this.groupBy[1],
          matchDir: true
        }];
      }

      if (!this.vuex) {
        this.registerClientFilters();
        if (this.options.initialPage) this.setPage(this.options.initialPage);
      }

      if (this.groupBy && !this.orderBy) {
        this.orderBy.column = this.groupBy[0];
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
      var Theme = typeof theme === 'string' ? _themes["default"][theme] : theme();
      return _merge["default"].recursive(_data(), {
        source: "client",
        loading: false,
        theme: _merge["default"].recursive(Theme, themeOverride),
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
      groupBy: function groupBy() {
        return typeof this.opts.groupBy === 'string' ? [this.opts.groupBy] : this.opts.groupBy;
      },
      hasMultiSort: function hasMultiSort() {
        return this.opts.clientMultiSorting;
      }
    },
    methods: {
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
      downloadCsv: function downloadCsv() {
        var _this2 = this;

        var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'table.csv';
        var r;
        var rows = [this.columns].concat(this.allFilteredData.map(function (row) {
          r = {};

          _this2.columns.forEach(function (column) {
            r[column] = row[column];
          });

          return Object.values(r);
        }));
        var csvContent = "data:text/csv;charset=utf-8," + rows.map(function (e) {
          return e.join(",");
        }).join("\n");
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", filename);
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file

        link.remove();
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
  var comp = (0, _VtClientTable["default"])(client);
  app.component("v-client-table", comp);
  return comp;
}

;