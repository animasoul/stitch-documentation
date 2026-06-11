// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stitch Payments for WooCommerce',
  tagline: 'Secure CardPointe credit card payments for WooCommerce stores',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.stitchpayments.net',
  baseUrl: '/',

  organizationName: 'stitch-payments',
  projectName: 'stitch-payments-for-woocommerce',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      '@cmfcmf/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        language: 'en',
        maxSearchResults: 12,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/stitch-logo.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Stitch Payments',
        logo: {
          alt: 'Stitch Payments',
          src: 'img/stitch-logo.png',
          srcDark: 'img/stitch-logo-white.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'merchants/benefits',
            position: 'left',
            label: 'Merchants',
          },
          {
            type: 'doc',
            docId: 'developers/overview',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'doc',
            docId: 'changelog',
            position: 'left',
            label: 'Changelog',
          },
          {
            href: 'https://www.stitchpayments.net/',
            label: 'Stitch Payments',
            position: 'right',
          },
          {
            href: 'https://www.mindk.com/',
            label: 'Built by MindK',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              { label: 'Introduction', to: '/docs/intro' },
              { label: 'For merchants', to: '/docs/merchants/benefits' },
              { label: 'For developers', to: '/docs/developers/overview' },
              { label: 'Changelog', to: '/docs/changelog' },
            ],
          },
          {
            title: 'Stitch Payments',
            items: [
              { label: 'Website', href: 'https://www.stitchpayments.net/' },
              { label: 'About Stitch', href: 'https://www.stitchpayments.net/about/' },
            ],
          },
          {
            title: 'MindK',
            items: [
              { label: 'Website', href: 'https://www.mindk.com/' },
              { label: 'Contact', href: 'https://www.mindk.com/contacts/' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stitch Payments. Documentation built by <a href="https://www.mindk.com/">MindK</a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
