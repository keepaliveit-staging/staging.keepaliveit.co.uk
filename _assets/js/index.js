import $ from 'jquery';
window.jQuery = $;
window.$ = $;

console.log('hot reload demo working well - yay!!! woo');

module.hot.accept();

import './plugins/jquery.fitvids'
import './_main'
import './site'