/* empty css                             */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, e as addAttribute, f as renderComponent } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { $ as $$Navbar, a as $$NavOption, d as $$Menu, b as $$Footer, c as $$Layout } from './PostsLayout_4063c604.mjs';

const $$Astro$4 = createAstro();
const $$Title = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Title;
  return renderTemplate`${maybeRenderHead()}<div class="rounded-lg mb-8">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/blog/Title.astro", void 0);

const $$Astro$3 = createAstro();
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Posts;
  return renderTemplate`${maybeRenderHead()}<div class="grid md:grid-cols-2 gap-8">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/blog/Posts.astro", void 0);

const $$Astro$2 = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { etiqueta = "", titulo = "", descripcion = "", link = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"><a href="#" class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"><svg class="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z"></path></svg>${etiqueta}</a><h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">${titulo}</h2><p class="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">${descripcion}</p><a${addAttribute(link, "href")} class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Leer mas
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/blog/Card.astro", void 0);

const $$Astro$1 = createAstro();
const $$Jumbotron = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Jumbotron;
  const { titulo = "", descripcion = "", link = "", imagen: Imagen = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(["bg-center bg-no-repeat bg-gray-700 bg-blend-multiply rounded-lg", Imagen], "class:list")}><div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56"><h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">${titulo}</h1><p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">${descripcion}</p><div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"><a${addAttribute(link, "href")} target="_blank" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
Visita facebook
<svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></div></div></section>`;
}, "/home/angel/Escritorio/eltlacuache/src/components/Jumbotron.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const imagen = "/eltlacuache.jpg", link = "https://www.facebook.com/TlacuacheNoticias?mibextid=JRoKGi", nombre = "El Tlacuache";
  const articulos = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post_1.md": () => import('./post_1_59d80333.mjs'),"./posts/post_2.md": () => import('./post_2_7778cc41.mjs'),"./posts/post_3.md": () => import('./post_3_7b0b3ca8.mjs'),"./posts/post_4.md": () => import('./post_4_e0b0fe1b.mjs')}), () => "./posts/*.md");
  articulos.reverse();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navbar", $$Navbar, { "imagen": imagen, "link": "/", "nombre": nombre }, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/", "nombre": "Inicio" })}${renderComponent($$result3, "NavOption", $$NavOption, { "link": "/galeria", "nombre": "Galeria" })}` })}${renderComponent($$result2, "Menu", $$Menu, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Title", $$Title, {}, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Jumbotron", $$Jumbotron, { "titulo": "El Tlacuache", "descripcion": "Sitio web de noticias y medios de comunicaci\xF3n", "link": "https://www.facebook.com/TlacuacheNoticias?mibextid=JRoKGi", "imagen": "bg-[url('/352411094_1317815712278691_8596217776478060535_n.png')]" })}` })}${renderComponent($$result3, "Posts", $$Posts, {}, { "default": ($$result4) => renderTemplate`${articulos.map((x) => renderTemplate`${renderComponent($$result4, "Card", $$Card, { "etiqueta": x.frontmatter.etiqueta, "titulo": x.frontmatter.titulo, "descripcion": x.frontmatter.descripcion, "link": x.frontmatter.redireccion })}`)}` })}` })}${renderComponent($$result2, "Footer", $$Footer, { "link": link, "nombre": nombre })}` })}`;
}, "/home/angel/Escritorio/eltlacuache/src/pages/index.astro", void 0);

const $$file = "/home/angel/Escritorio/eltlacuache/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
