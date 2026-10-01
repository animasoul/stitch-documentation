// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'For merchants',
      collapsed: true,
      items: [
        'merchants/getting-started',
        'merchants/checkout-display',
        'merchants/stored-payments',
        'merchants/authorize-and-capture',
        'merchants/surcharge',
        'merchants/card-checks',
        'merchants/commercial-data',
        'merchants/data-and-privacy',
        'merchants/features',
        'merchants/benefits',
      ],
    },
    {
      type: 'category',
      label: 'For developers',
      collapsed: true,
      items: [
        'developers/customization',
        'developers/overview',
        'developers/hooks',
        'developers/elementor',
        'developers/styling',
        'developers/cardpointe',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
