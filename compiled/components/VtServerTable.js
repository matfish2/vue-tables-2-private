"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _VtPerPageSelector = _interopRequireDefault(require("./VtPerPageSelector"));

var _VtTable = _interopRequireDefault(require("./VtTable"));

var _VtPagination = _interopRequireDefault(require("./VtPagination"));

var _VtDropdownPagination = _interopRequireDefault(require("./VtDropdownPagination"));

var _VtGenericFilter = _interopRequireDefault(require("./VtGenericFilter"));

var _VtColumnsDropdown = _interopRequireDefault(require("./VtColumnsDropdown"));

var _Observer = _interopRequireDefault(require("./Observer"));

var _VtPaginationCount = _interopRequireDefault(require("./VtPaginationCount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtServerTable',
  components: {
    VtPerPageSelector: _VtPerPageSelector["default"],
    VtTable: _VtTable["default"],
    VtPagination: _VtPagination["default"],
    VtDropdownPagination: _VtDropdownPagination["default"],
    VtColumnsDropdown: _VtColumnsDropdown["default"],
    VtGenericFilter: _VtGenericFilter["default"],
    VtPaginationCount: _VtPaginationCount["default"],
    Observer: _Observer["default"]
  },
  props: {
    columns: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: false
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
  computed: {
    customQueries: {
      get: function get() {
        return this.$refs.table.customQueries;
      },
      set: function set(val) {
        this.$refs.table.customQueries = val;
      }
    },
    data: function data() {
      return this.$refs.table.tableData;
    },
    selectedRows: function selectedRows() {
      return this.$refs.table.selectedRows;
    }
  },
  methods: {
    refresh: function refresh() {
      this.$refs.table.refresh();
    },
    getData: function getData() {
      return this.$refs.table.getData();
    },
    setFilter: function setFilter(val) {
      this.$refs.table.setFilter(val);
    },
    setPage: function setPage(val) {
      this.$refs.table.setPage(val);
    },
    setOrder: function setOrder(column, asc) {
      this.$refs.table.setOrder(column, asc);
    },
    setLimit: function setLimit(limit) {
      this.$refs.table.setLimit(limit);
    },
    toggleChildRow: function toggleChildRow(rowId) {
      this.$refs.table.toggleChildRow(rowId);
    },
    getOpenChildRows: function getOpenChildRows() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      return this.$refs.table.getOpenChildRows(rows);
    },
    getResponseData: function getResponseData(response) {
      return this.$refs.table.getResponseData(response);
    },
    resetQuery: function resetQuery() {
      this.$refs.table.resetQuery();
    },
    resetSelectedRows: function resetSelectedRows() {
      this.$refs.table.resetSelectedRows();
    },
    selectRow: function selectRow(id) {
      return this.$refs.table.selectRow(id);
    },
    unselectRow: function unselectRow(id) {
      return this.$refs.table.unselectRow(id);
    },
    selectRows: function selectRows(ids) {
      return this.$refs.table.selectRows(ids);
    },
    unselectRows: function unselectRows(ids) {
      return this.$refs.table.unselectRows(ids);
    },
    toggleRow: function toggleRow(id) {
      return this.$refs.table.toggleRow(id);
    },
    selectAllRows: function selectAllRows() {
      return this.$refs.table.selectAllRows();
    },
    resetCustomFilters: require('../methods/reset-custom-filters')
  },
  provide: function provide() {
    var _this = this;

    return {
      scopedSlots: function scopedSlots() {
        return _this.$scopedSlots;
      },
      slots: function slots() {
        return _this.$slots;
      }
    };
  },
  model: {
    prop: "data"
  },
  render: function render(h) {
    return (0, _vue.createVNode)((0, _vue.resolveComponent)("r-l-server-table"), {
      "url": this.url,
      "columns": this.columns,
      "name": this.name,
      "options": this.options,
      "ref": "table",
      "scopedSlots": {
        "default": function _default(props) {
          return props.override ? h(props.override, {
            attrs: {
              props: props
            }
          }) : (0, _vue.createVNode)("div", {
            "class": "VueTables VueTables--" + props.source
          }, [(0, _vue.createVNode)("div", {
            "class": props.theme.row
          }, [(0, _vue.createVNode)("div", {
            "class": props.theme.column
          }, [!props.opts.filterByColumn && props.opts.filterable ? (0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.left, " VueTables__search")
          }, [props.slots.beforeFilter, (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-generic-filter"), {
            "ref": "genericFilter"
          }, null), props.slots.afterFilter]) : '', props.slots.afterFilterWrapper, (props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual ? (0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__limit")
          }, [props.slots.beforeLimit, (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-per-page-selector"), null, null), props.slots.afterLimit]) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? (0, _vue.createVNode)("div", {
            "class": "VueTables__pagination-wrapper"
          }, [(0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__dropdown-pagination")
          }, [(0, _vue.createVNode)((0, _vue.resolveComponent)("vt-dropdown-pagination"), null, null)])]) : '', props.opts.columnsDropdown ? (0, _vue.createVNode)("div", {
            "class": "VueTables__columns-dropdown-wrapper ".concat(props.theme.right, " ").concat(props.theme.dropdown.container)
          }, [(0, _vue.createVNode)((0, _vue.resolveComponent)("vt-columns-dropdown"), null, null)]) : ''])]), props.slots.beforeTable, (0, _vue.createVNode)("div", {
            "class": "table-responsive",
            "style": props.styles()
          }, [(0, _vue.createVNode)((0, _vue.resolveComponent)("vt-table"), {
            "ref": "vt_table"
          }, null), props.opts.pagination.virtual && !props.loading ? (0, _vue.createVNode)((0, _vue.resolveComponent)("observer"), {
            "onIntersect": function onIntersect() {
              return props.setPage(props.page + 1);
            }
          }, null) : '']), props.slots.afterTable, props.opts.pagination.virtual || !props.opts.pagination.show ? '' : (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-pagination"), null, null), props.opts.pagination.virtual || props.opts.pagination.dropdown ? (0, _vue.createVNode)((0, _vue.resolveComponent)("vt-pagination-count"), null, null) : '']);
        }
      }
    }, null);
  }
};
exports["default"] = _default2;