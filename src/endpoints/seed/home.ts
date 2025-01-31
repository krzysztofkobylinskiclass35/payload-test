import type { RequiredDataFromCollectionSlug } from 'payload'

export const home = (locale: 'en' | 'es' | 'ja'): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'home',
  slugLock: false,
  _status: 'published',
  hero: {
    type: 'highImpact',
    title: {
      regularText: 'Payload Website Template',
      highlightedText: 'Payload Website Template',
      accentText: 'Payload Website Template',
    },
    image: '{{IMAGE_1}}',
  },
  layout: [
    {
      blockName: 'Content Block',
      blockType: 'content',
      columns: [
        {
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Core features' : 'Características principales',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h2',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'full',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Admin Dashboard' : 'Panel de administración',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? "Manage this site's pages and posts from the "
                          : 'Administre las páginas y publicaciones de este sitio desde el ',
                      version: 1,
                    },
                    {
                      type: 'link',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: locale === 'en' ? 'admin dashboard' : 'panel de administración',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      fields: {
                        linkType: 'custom',
                        newTab: false,
                        url: '/admin',
                      },
                      format: '',
                      indent: 0,
                      version: 2,
                    },
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: '.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Preview' : 'Vista previa',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'Using versions, drafts, and preview, editors can review and share their changes before publishing them.'
                          : 'Utilizando versiones, borradores y vista previa, los editores pueden revisar y compartir sus cambios antes de publicarlos.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Page Builder' : 'Constructor de páginas',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'Custom page builder allows you to create unique page, post, and project layouts for any type of content.'
                          : 'El constructor de páginas personalizado le permite crear diseños de página, publicación y proyecto únicos para cualquier tipo de contenido.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: 'SEO',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'Editors have complete control over SEO data and site content directly from the '
                          : 'Los editores tienen control total sobre los datos de SEO y el contenido del sitio directamente desde el ',
                      version: 1,
                    },
                    {
                      type: 'link',
                      children: [
                        {
                          type: 'text',
                          detail: 0,
                          format: 0,
                          mode: 'normal',
                          style: '',
                          text: locale === 'en' ? 'admin dashboard' : 'panel de administración',
                          version: 1,
                        },
                      ],
                      direction: 'ltr',
                      fields: {
                        linkType: 'custom',
                        newTab: false,
                        url: '/admin',
                      },
                      format: '',
                      indent: 0,
                      version: 2,
                    },
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: '.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
        {
          enableLink: false,
          richText: {
            root: {
              type: 'root',
              children: [
                {
                  type: 'heading',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text: locale === 'en' ? 'Dark Mode' : 'Modo oscuro',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  tag: 'h3',
                  version: 1,
                },
                {
                  type: 'paragraph',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'Users will experience this site in their preferred color scheme and each block can be inverted.'
                          : 'Los usuarios experimentarán este sitio en su esquema de color preferido y cada bloque puede ser invertido.',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  format: '',
                  indent: 0,
                  textFormat: 0,
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              version: 1,
            },
          },
          size: 'oneThird',
        },
      ],
    },
    {
      blockName: 'Media Block',
      blockType: 'mediaBlock',
      // @ts-ignore
      media: '{{IMAGE_2}}',
      position: 'default',
    },
    {
      blockName: 'Archive Block',
      blockType: 'archive',
      categories: [],
      introContent: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: locale === 'en' ? 'Recent posts' : 'Publicaciones recientes',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h3',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'The posts below are displayed in an "Archive" layout building block which is an extremely powerful way to display documents on a page. It can be auto-populated by collection or by category, or posts can be individually selected. Pagination controls will automatically appear if the number of results exceeds the number of items per page.'
                      : 'Las publicaciones que aparecen a continuación se muestran en un bloque de diseño de "Archivo", que es una forma muy eficaz de mostrar documentos en una página. Se puede mostrar automáticamente por colección o por categoría, o se pueden seleccionar publicaciones individualmente. Los controles de paginación aparecerán automáticamente si la cantidad de resultados supera la cantidad de elementos por página.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      populateBy: 'collection',
      relationTo: 'posts',
    },
    {
      blockName: 'CTA',
      blockType: 'cta',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'default',
            label: locale === 'en' ? 'All posts' : 'Ver publicaciones',
            url: '/posts',
          },
        },
      ],
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en' ? 'This is a call to action' : 'Esta es una llamada a acción',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h3',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'This is a custom layout building block '
                      : 'Este es un bloque de construcción de diseño personalizado ',
                  version: 1,
                },
                {
                  type: 'link',
                  children: [
                    {
                      type: 'text',
                      detail: 0,
                      format: 0,
                      mode: 'normal',
                      style: '',
                      text:
                        locale === 'en'
                          ? 'configured in the admin dashboard'
                          : 'configurado en el panel de administración',
                      version: 1,
                    },
                  ],
                  direction: 'ltr',
                  fields: {
                    linkType: 'custom',
                    newTab: false,
                    url: '/admin',
                  },
                  format: '',
                  indent: 0,
                  version: 2,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: '.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
  ],
  meta: {
    description:
      locale === 'en'
        ? 'An open-source website built with Payload and Next.js.'
        : 'Un sitio web open source construido con Payload y Next.js',
    // @ts-ignore
    image: '{{IMAGE_1}}',
    title: locale === 'en' ? 'Payload Website Template' : 'Plantilla de sitio web de Payload',
  },
  title: locale === 'en' ? 'Home' : 'Inicio',
})
