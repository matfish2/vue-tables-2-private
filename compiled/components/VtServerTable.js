"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default2;

var _vue = require("vue");

var _VtPerPageSelector = _interopRequireDefault(require("./VtPerPageSelector"));

var _VtTable = _interopRequireDefault(require("./VtTable"));

var _VtPagination = _interopRequireDefault(require("./VtPagination"));

var _VtDropdownPagination = _interopRequireDefault(require("./VtDropdownPagination"));

var _VtGenericFilter = _interopRequireDefault(require("./VtGenericFilter"));

var _VtColumnsDropdown = _interopRequireDefault(require("./VtColumnsDropdown"));

var _Observer = _interopRequireDefault(require("./Observer"));

var _VtPaginationCount = _interopRequireDefault(require("./VtPaginationCount"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

var _emittedEvents = _interopRequireDefault(require("../helpers/emitted-events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default2(RLServerTable) {
  return {
    name: 'VtServerTable',
    emits: _emittedEvents["default"],
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
      getRequestParams: function getRequestParams() {
        return this.$refs.table.getRequestParams();
      },
      setRequestParams: function setRequestParams(params) {
        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return this.$refs.table.setRequestParams(params, sendRequest);
      },
      setCustomFilters: function setCustomFilters(params) {
        var sendRequest = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return this.$refs.table.setCustomFilters(params, sendRequest);
      },
      resetCustomFilters: require('../methods/reset-custom-filters')
    },
    provide: function provide() {
      var _this = this;

      return {
        slots: function slots() {
          return _this.$slots;
        }
      };
    },
    model: {
      prop: "data"
    },
    setup: function setup() {
      var tablewrapper = (0, _vue.ref)(null);
      return {
        tablewrapper: tablewrapper
      };
    },
    render: function render() {
      return (0, _vue.h)(RLServerTable, {
        url: this.url,
        columns: this.columns,
        name: this.name,
        options: this.options,
        ref: 'table'
      }, {
        "default": function _default(props) {
          return props.override ? (0, _vue.h)(props.override, {
            props: (0, _omit["default"])(props)
          }) : (0, _vue.createVNode)("div", {
            "class": "VueTables VueTables--" + props.source
          }, [(0, _vue.createVNode)("div", {
            "class": props.theme.row
          }, [(0, _vue.createVNode)("div", {
            "class": props.theme.column
          }, [!props.opts.filterByColumn && props.opts.filterable ? (0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.left, " VueTables__search")
          }, [props.slots.beforeFilter ? props.slots.beforeFilter() : '', (0, _vue.h)(_VtGenericFilter["default"]), props.slots.afterFilter ? props.slots.afterFilter() : '']) : '', props.slots.afterFilterWrapper ? props.slots.afterFilterWrapper() : '', (props.perPageValues.length > 1 || props.opts.alwaysShowPerPageSelect) && !props.opts.pagination.virtual ? (0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__limit")
          }, [props.slots.beforeLimit ? props.slots.beforeLimit() : '', (0, _vue.h)(_VtPerPageSelector["default"]), props.slots.afterLimit ? props.slots.afterLimit() : '']) : '', props.opts.pagination.dropdown && props.totalPages > 1 ? (0, _vue.createVNode)("div", {
            "class": "VueTables__pagination-wrapper"
          }, [(0, _vue.createVNode)("div", {
            "class": "".concat(props.theme.field, " ").concat(props.theme.inline, " ").concat(props.theme.right, " VueTables__dropdown-pagination")
          }, [(0, _vue.h)(_VtDropdownPagination["default"])])]) : '', props.opts.columnsDropdown ? (0, _vue.createVNode)("div", {
            "class": "VueTables__columns-dropdown-wrapper ".concat(props.theme.right, " ").concat(props.theme.dropdown.container)
          }, [(0, _vue.h)(_VtColumnsDropdown["default"])]) : ''])]), props.slots.beforeTable ? props.slots.beforeTable() : '', (0, _vue.createVNode)("div", {
            "class": "table-responsive VueTables__wrapper",
            "ref": "tablewrapper",
            "style": props.styles()
          }, [(0, _vue.h)(_VtTable["default"]), props.opts.pagination.virtual && !props.loading ? (0, _vue.h)(_Observer["default"], {
            onIntersect: function onIntersect() {
              props.setPage(props.page + 1);
            }
          }) : '']), props.slots.afterTable ? props.slots.afterTable() : '', props.opts.pagination.virtual || !props.opts.pagination.show ? '' : (0, _vue.h)(_VtPagination["default"]), props.opts.pagination.virtual || props.opts.pagination.dropdown ? (0, _vue.h)(_VtPaginationCount["default"]) : '']);
        }
      });
    }
  };
}