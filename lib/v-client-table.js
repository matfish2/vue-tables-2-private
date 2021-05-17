import vuex from "./state/vuex";
import normal from "./state/normal";
import merge from "merge";
import stateData from "./state/data";
import resizableColumns from "./helpers/resizeable-columns";
import VtClientTable from "./components/VtClientTable";
import Table from "./table"
import themes from "./themes/themes";

var data = require("./mixins/data");
var created = require("./mixins/created");
var provide = require("./mixins/provide")

export default function install(
    app,
    globalOptions,
    theme = "bootstrap3",
    componentsOverride = {},
    themeOverride= {}
) {
    var useVuex = false

    var client = merge.recursive(true, Table(), {
        name: "r-l-client-table",
        render: require('./components/renderless/RLDataTable'),
        provide,
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
                default: function () {
                    return {};
                }
            }
        },

        created: function () {
            created(this);

            if (this.opts.toMomentFormat) this.transformDateStringsToMoment();

            if (!this.vuex) {
                this.initOrderBy();

                this.query = this.initQuery();

                this.customQueries = this.initCustomFilters();
            }
        },
        mounted: function () {

            this._setFiltersDOM(this.query);

            if (this.opts.resizableColumns) {
                resizableColumns(
                    this.refs.table,
                    this.hasChildRow,
                    this.opts.childRowTogglerFirst,
                    this.resizableColumns,
                    this.opts.stickyHeader
                );
            }


            if (this.groupBy && this.groupBy.length > 1) {
                this.options.multiSorting = {}
                this.options.multiSorting[this.groupBy[0]] = [
                    {
                        column: this.groupBy[1],
                        matchDir: true
                    }
                ]
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
            }

            // listen for data being removed
            // and nav to last page if current page is greater than total pages
            this.$watch('data', () => {
                if (this.page > this.totalPages) {
                    this.setPage(this.totalPages);
                }
            });

        },
        model: {
            prop: "data"
        },
        data: function () {
            var Theme = typeof theme === 'string' ? themes[theme] : theme();

            return merge.recursive(
                data(),
                {
                    source: "client",
                    loading: false,
                    theme: merge.recursive(Theme, themeOverride),
                    globalOptions,
                    componentsOverride,
                    currentlySorting: {},
                    time: Date.now()
                },
                stateData(useVuex, "client", this.options.initialPage)
            );
        },
        computed: {
            q: require("./computed/q"),
            customQ: require("./computed/custom-q"),
            totalPages: require("./computed/total-pages"),
            filteredData: require("./computed/filtered-data"),
            groupBy() {
                return typeof this.opts.groupBy === 'string' ? [this.opts.groupBy] : this.opts.groupBy;
            },
            hasMultiSort() {
                return this.opts.clientMultiSorting;
            }
        },
        methods: {
            transformDateStringsToMoment: require("./methods/transform-date-strings-to-moment"),
            registerClientFilters: require("./methods/register-client-filters"),
            search: require("./methods/client-search"),
            defaultSort: require("./methods/default-sort"),
            getGroupSlot: require("./methods/get-group-slot"),
            toggleGroup(group, e) {
                e.stopPropagation();

                var i = this.collapsedGroups.indexOf(group);
                if (i >= 0) {
                    this.collapsedGroups.splice(i, 1);
                } else {
                    this.collapsedGroups.push(group);
                }
            },
            groupToggleIcon(group) {
                var cls = this.opts.sortIcon.base + " ";
                cls +=
                    this.collapsedGroups.indexOf(group) > -1
                        ? this.opts.sortIcon.down
                        : this.opts.sortIcon.up;

                return cls;
            },
            downloadCsv(filename = 'table.csv') {
                let r;
                let rows = [this.columns].concat(this.allFilteredData.map(row => {
                    r = {};

                    this.columns.forEach(column => {
                        r[column] = row[column]
                    });

                    return Object.values(r)
                }));

                let csvContent = "data:text/csv;charset=utf-8,"
                    + rows.map(e => e.join(",")).join("\n");

                let encodedUri = encodeURI(csvContent);
                let link = document.createElement("a");
                link.setAttribute("href", encodedUri);
                link.setAttribute("download", filename);
                document.body.appendChild(link); // Required for FF

                link.click(); // This will download the data file
                link.remove();
            },
            loadState() {
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
                }

                // TODO: Custom Queries
            }
        }
    });

    let state = useVuex ? vuex() : normal();

    client = merge.recursive(client, state);

    const comp = VtClientTable(client);
    app.component("v-client-table", comp);

    return comp;
};
