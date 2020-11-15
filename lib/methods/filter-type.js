import VtTextFilter from "../components/VtTextFilter";
import VtDateFilter from "../components/VtDateFilter";
import VtListFilter from "../components/VtListFilter";

module.exports = function(column) {

  if (!this.opts.filterable) return false;

  if (this.isTextFilter(column)) return VtTextFilter;
  if (this.isDateFilter(column)) return VtDateFilter;
  if (this.isListFilter(column)) return VtListFilter;
}
