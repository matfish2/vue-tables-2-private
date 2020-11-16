import VtTextFilter from '../components/VtTextFilter'
import VtListFilter from "../components/VtListFilter";
import VtDateFilter from "../components/VtDateFilter";

module.exports = function(column) {

  if (!this.opts.filterable) return false;

  if (this.isTextFilter(column)) return VtTextFilter;
  if (this.isDateFilter(column)) return VtDateFilter;
  if (this.isListFilter(column)) return VtListFilter;
}
