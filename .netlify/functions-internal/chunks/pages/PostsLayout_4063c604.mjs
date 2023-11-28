import { c as createAstro, a as createComponent, r as renderTemplate, b as renderSlot, d as renderHead, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro/server_d07ed82c.mjs';
import 'clsx';
/* empty css                             */
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>p\xE1gina oficial de conoce el sur de Veracruz</title>', "</head><body>", '<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script></body></html>'])), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/home/angel/Escritorio/eltlacuache/src/layouts/Layout.astro", void 0);

const $$Astro$4 = createAstro();
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { imagen = "", nombre = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-white border-gray-200 "><div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"><a${addAttribute(link, "href")} class="flex items-center space-x-3 rtl:space-x-reverse"><img${addAttribute(imagen, "src")} class="h-8" alt="Flowbite Logo"><span class="self-center text-2xl font-semibold whitespace-nowrap ">${nombre}</span></a><button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false"><span class="sr-only">Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path></svg></button><div class="hidden w-full md:block md:w-auto" id="navbar-default"><ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white ">${renderSlot($$result, $$slots["default"])}</ul></div></div></nav>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/Navbar.astro", void 0);

const $$Astro$3 = createAstro();
const $$NavOption = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavOption;
  const { nombre = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(link, "href")} class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">${nombre}</a></li>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/NavOption.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const { nombre = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white rounded-lg shadow m-4"><div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between"><span class="text-sm text-gray-500 sm:text-center">© 2023 <a${addAttribute(link, "href")} class="hover:underline">${nombre}</a>. All Rights Reserved.
</span><ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0"><li><a href="#" class="hover:underline me-4 md:me-6">About</a></li><li><a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a></li><li><a href="#" class="hover:underline me-4 md:me-6">Licensing</a></li><li><a href="#" class="hover:underline">Contact</a></li></ul></div></footer>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro();
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Menu;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-900"><div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">${renderSlot($$result, $$slots["default"])}</div></section>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/blog/Menu.astro", void 0);

const $$Astro = createAstro();
const $$PostsLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostsLayout;
  const img = "/eltlacuache.jpg", url = "https://www.facebook.com/TlacuacheNoticias?mibextid=JRoKGi", nombre = "El Tlacuache";
  const { frontmatter } = Astro2.props;
  const { titulo, imagen, descripcion, link } = frontmatter;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": img, "link": "/", "nombre": nombre }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased"><div class="flex justify-between px-4 mx-auto max-w-screen-xl "><article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert"><header class="mb-4 lg:mb-6 not-format"><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">${titulo}</h1></header><figure class="mb-4"><img${addAttribute(imagen, "src")} class="mx-auto w-full lg:max-w-xl h-full w-full rounded-lg shadow-x" alt=""></figure><p class="lead">${descripcion}</p><div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 mt-4"><a${addAttribute(link, "href")} target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
Ver en facebook
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div></article></div></main>` })}${renderComponent($$result2, "Footer", $$Footer, { "link": url, "nombre": nombre })}` })}`;
}, "/home/angel/Escritorio/eltlacuache/src/pages/posts/PostsLayout.astro", void 0);

const $$file = "/home/angel/Escritorio/eltlacuache/src/pages/posts/PostsLayout.astro";
const $$url = "/posts/PostsLayout";

const PostsLayout = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PostsLayout,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Navbar as $, PostsLayout as P, $$NavOption as a, $$Footer as b, $$Layout as c, $$Menu as d, $$PostsLayout as e };
