/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_4063c604.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"27 de Noviembre del 2023","titulo":"Cerrada la Presa Yuribia por turbiedad del agua","imagen":"/404622761_262771490126226_8378743535493092413_n.jpg","descripcion":"Debido a la turbiedad del agua ocasionada por las recientes lluvias, la Comisión Municipal de Agua y Saneamiento cerró el suministro del líquido desde la Presa Yuribia para ofrecer una mejor calidad del servicio.  Para ello, el quiebra cargas del acueducto fue cerrado como resultado de la intensa turbiedad del agua y se trabaja en el proceso de filtración del recurso que es abastecido hacia la Presa desde los arroyos Ocotal y Texizapan en la zona serrana de Tatahuicapan.  Fuentes de agua que se afectan a causa de las condiciones climáticas provocadas por los frentes fríos, como el número 12 que dejó intensas precipitaciones en la región. Derivado de ello la CMAS ha cerrado el suministro de agua hacia la región, afectando a diversas colonias de la ciudad en tanto concluye el proceso de filtración del vital líquido.","link":"https://www.facebook.com/TlacuacheNoticias/posts/262771470126228?ref=embed_post","redireccion":"/posts/post_3"};
				const file = "/home/angel/Escritorio/eltlacuache/src/pages/posts/post_3.md";
				const url = "/posts/post_3";
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$PostsLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
