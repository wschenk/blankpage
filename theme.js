import "prismjs/prism.js";
import "prismjs/components/prism-scss.js";
import "prismjs/components/prism-markdown.js";
import "prismjs/plugins/toolbar/prism-toolbar.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.js";

import WebFont from 'webfontloader';
WebFont.load({
  google: {
    families: ['Roboto', 'Material Icons']
  }
});

import {MDCTopAppBar} from '@material/top-app-bar/index';
const topAppBarElement = document.querySelector( '.mdc-top-app-bar' );
const topAppBar = new MDCTopAppBar(topAppBarElement);

//
// import {MDCTopAppBar} from '@material/top-app-bar/index';
// import {MDCPersistentDrawer} from '@material/drawer/persistent/index';
//
// WebFont.load({
//   google: {
//     families: ['Roboto', 'Material Icons','Cutive Mono', 'Source Serif Pro']
//   }
// });
//
// // Instantiation
// const topAppBarElement = document.querySelector('.mdc-top-app-bar');
// const topAppBar = new MDCTopAppBar(topAppBarElement);
// const drawerElement = document.querySelector('.mdc-drawer--persistent');
// console.log( "drawerElement", drawerElement)
// let drawer = new MDCPersistentDrawer(drawerElement);
// topAppBarElement.addEventListener( 'MDCTopAppBar:nav', () => { drawer.open = !drawer.open; });
