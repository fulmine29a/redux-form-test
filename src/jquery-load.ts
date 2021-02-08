import JQuery from 'jquery'

declare global {
  interface Window {
    jQuery: JQueryStatic,
    $: JQueryStatic
  }
}

window.$ = window.jQuery = JQuery
