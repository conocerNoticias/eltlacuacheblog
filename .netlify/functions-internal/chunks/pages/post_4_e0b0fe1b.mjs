/* empty css                             */import { a as createComponent, r as renderTemplate, f as renderComponent, u as unescapeHTML } from '../astro/server_d07ed82c.mjs';
import 'clsx';
import { e as $$PostsLayout } from './PostsLayout_4063c604.mjs';

const html = "";

				const frontmatter = {"layout":"./PostsLayout.astro","etiqueta":"27 de Noviembre del 2023","titulo":"Espectacular cierre en el 35 Aniversario de #Nanchital","imagen":"/405175819_262793170124058_5441842052756592892_n.jpg","descripcion":"Nanchital, Ver. - Con un exitoso baile a cargo de Junior Klan, cerró de manera espectacular los eventos de este fin de semana, en conmemoración del 35 Aniversario de Nanchital. Antes del show principal, se tuvo la presencia del grupo Son del Nache y el artista local, Carlos Flores, quienes calentaron los ánimos en la ExFactoría, lugar en el que la Alcaldesa Esmeralda Mora Zamudio y la Diputada Tanía Cruz Santos, develaron la placa que reconoce a Nanchital como Municipio con Vocación Turística. Posteriormente, tocó el turno de los integrantes de Junior Klan poner a bailar y cantar a los presentes, los cuales en todo momento disfrutaron de una gran noche que concluyó con saldo blanco.","link":"https://www.facebook.com/TlacuacheNoticias/posts/262793143457394?ref=embed_post","redireccion":"/posts/post_4"};
				const file = "/home/angel/Escritorio/eltlacuache/src/pages/posts/post_4.md";
				const url = "/posts/post_4";
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
