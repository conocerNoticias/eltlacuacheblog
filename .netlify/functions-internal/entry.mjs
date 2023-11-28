import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_7d4c33de.mjs';

const _page0  = () => import('./chunks/generic_26ca5625.mjs');
const _page1  = () => import('./chunks/index_9ff85f76.mjs');
const _page2  = () => import('./chunks/galeria_fb5c1372.mjs');
const _page3  = () => import('./chunks/PostsLayout_77fed748.mjs');
const _page4  = () => import('./chunks/post_1_8bfdfcda.mjs');
const _page5  = () => import('./chunks/post_2_f1cc9444.mjs');
const _page6  = () => import('./chunks/post_3_d2e856d1.mjs');
const _page7  = () => import('./chunks/post_4_091bcd07.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/galeria.astro", _page2],["src/pages/posts/PostsLayout.astro", _page3],["src/pages/posts/post_1.md", _page4],["src/pages/posts/post_2.md", _page5],["src/pages/posts/post_3.md", _page6],["src/pages/posts/post_4.md", _page7]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
