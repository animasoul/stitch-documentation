// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

// Current release of the Stitch Payments for WooCommerce plugin.
// Shown on the homepage hero and in the footer; update on each release.
const pluginVersion = '0.7.0';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stitch Payments for WooCommerce',
  tagline: 'Secure CardPointe credit card payments for WooCommerce stores',
  favicon: 'img/favicon.ico',

  customFields: {
    pluginVersion,
  },

  future: {
    v4: true,
  },

  url: 'https://stitch-documentation.vercel.app',
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
      image: 'img/stitch-social.png',
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },
      navbar: {
        logo: {
          alt: 'Stitch Payments',
          src: 'img/stitch-logo.png',
          srcDark: 'img/stitch-logo-white.png',
        },
        items: [
          {
            to: '/docs/merchants/getting-started',
            label: 'Merchants',
            position: 'left',
            activeBaseRegex: '^/docs/merchants/',
          },
          {
            to: '/docs/developers/customization',
            label: 'Developers',
            position: 'left',
            activeBaseRegex: '^/docs/developers/',
          },
          {
            href: 'https://stitch.ajpartnersltd.com/',
            label: 'Demo',
            position: 'right',
          },
          {
            href: 'https://www.stitchpayments.net/signup/',
            label: 'Sign up',
            position: 'right',
            className: 'stitch-signup navbar-signup',
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
              { label: 'For merchants', to: '/docs/merchants/getting-started' },
              { label: 'For developers', to: '/docs/developers/customization' },
              { label: 'Changelog', to: '/docs/changelog' },
            ],
          },
          {
            title: 'Stitch Payments',
            items: [
              { label: 'Website', href: 'https://www.stitchpayments.net/' },
              { label: 'About Stitch', href: 'https://www.stitchpayments.net/about/' },
              { label: 'Demo shop', href: 'https://stitch.ajpartnersltd.com/' },
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
        copyright: `Plugin version <a href="/docs/changelog">${pluginVersion}</a> · Copyright © ${new Date().getFullYear()} Stitch Payments. Documentation built by <a class="stitch-footer-mindk" href="https://www.mindk.com/" target="_blank" rel="noopener noreferrer"><img src="/img/mindk-logo-white.svg" alt="MindK" width="140" height="24" /></a>.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
