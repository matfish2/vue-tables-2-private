"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLListFilter = _interopRequireDefault(require("./renderless/RLListFilter"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtListFilter',
  inject: ['setFilterRef'],
  props: ['column'],
  components: {
    RLListFilter: _RLListFilter["default"]
  },
  setup: function setup() {
    var filter = (0, _vue.ref)(null);
    return {
      filter: filter
    };
  },
  mounted: function mounted() {
    this.setFilterRef(this.column, this.$refs.filter);
  },
  render: function render() {
    var _this = this;

    return (0, _vue.h)(_RLListFilter["default"], {
      column: this.column
    }, {
      "default": function _default(props) {
        var options = [];
        var selected;
        props.items.map(function (option) {
          selected = String(option.id) === String(props.query[_this.column]) && props.query[_this.column] !== '';
          options.push((0, _vue.createVNode)("option", {
            "value": option.id,
            "selected": selected
          }, [option.text]));
        });
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("div", {
          "class": "VueTables__list-filter",
          "ref": "filter",
          "id": 'VueTables__' + _this.column + '-filter'
        }, [(0, _vue.createVNode)("select", {
          "class": props.theme.select,
          "onChange": props.search(false),
          "name": props.name,
          "value": props.value
        }, [(0, _vue.createVNode)("option", {
          "value": ""
        }, [props.defaultOption]), options])]);
      }
    });
  }
};
exports["default"] = _default2;