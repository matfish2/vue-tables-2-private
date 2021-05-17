"use strict";

module.exports = function () {
  return {
    framework: 'tailwind',
    table: 'table-auto',
    thead: '',
    th: 'border px-4 py-2',
    td: 'border px-4 py-2',
    tr: '',
    trEven: 'bg-gray-100',
    trOdd: '',
    row: 'grid-rows-1',
    column: 'flex',
    label: 'label',
    input: 'p-1 border',
    select: 'p-1 border',
    field: 'flex-initial m-2',
    inline: 'is-horizontal',
    right: 'is-pulled-right',
    left: 'is-pulled-left',
    center: 'text-center',
    contentCenter: 'is-centered',
    icon: 'icon',
    small: 'is-small',
    nomargin: 'marginless',
    button: 'button',
    groupTr: 'is-selected',
    dropdown: {
      container: 'dropdown flex-initial m-2 relative',
      trigger: 'dropdown-trigger border round p-1',
      menu: 'dropdown-menu absolute z-50 bg-white border p-2',
      content: 'dropdown-content truncate flex-1',
      item: 'dropdown-item mb-1 flex',
      caret: 'fa fa-angle-down',
      checkbox: 'mt-1',
      text: 'text-left ml-1'
    },
    pagination: {
      nav: 'mt-1',
      count: 'text-center',
      wrapper: 'pagination',
      list: 'flex',
      item: 'm-1 border rounded',
      link: 'block w-7 p-2',
      next: '',
      prev: '',
      active: 'bg-blue-700 text-white',
      disabled: 'text-gray-400 cursor-not-allowed'
    }
  };
};