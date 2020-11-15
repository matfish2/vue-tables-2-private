"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = require("vue");

var _RLGenericFilter = _interopRequireDefault(require("./renderless/RLGenericFilter"));

var _omit = _interopRequireDefault(require("../helpers/omit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default2 = {
  name: 'VtGenericFilter',
  inject: ['setRef'],
  components: {
    RLGenericFilter: _RLGenericFilter["default"]
  },
  setup: function setup() {
    var filter = (0, _vue.ref)(null);
    return {
      filter: filter
    };
  },
  mounted: function mounted() {
    this.setRef('genericFilter', this.$refs.filter);
  },
  render: function render() {
    return (0, _vue.h)(_RLGenericFilter["default"], {}, {
      "default": function _default(props) {
        return props.override ? (0, _vue.h)(props.override, {
          props: (0, _omit["default"])(props)
        }) : (0, _vue.createVNode)("div", {
          "class": "VueTables__search-field"
        }, [(0, _vue.createVNode)("label", {
          "for": "VueTables__search_".concat(props.id),
          "class": props.theme.label
        }, [props.display("filter")]), (0, _vue.createVNode)("input", {
          "class": "VueTables__search__input ".concat(props.theme.input, " ").concat(props.theme.small),
          "ref": "filter",
          "type": "text",
          "placeholder": props.display('filterPlaceholder'),
          "onKeyup": props.search(props.opts.debounce),
          "id": "VueTables__search_".concat(props.id),
          "autocomplete": "off"
        }, null)]);
      }
    });
  },
  methods: {
    focus: function focus() {
      this.$refs.filter.focus();
    },
    blur: function blur() {
      this.$refs.filter.blur();
    }
  }
};
exports["default"] = _default2;