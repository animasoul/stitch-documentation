// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'For merchants',
      collapsed: false,
      items: [
        'merchants/benefits',
        'merchants/features',
        'merchants/getting-started',
        'merchants/checkout-display',
        'merchants/stored-payments',
        'merchants/surcharge',
      ],
    },
    {
      type: 'category',
      label: 'For developers',
      collapsed: false,
      items: [
        'developers/overview',
        'developers/customization',
        'developers/hooks',
        'developers/elementor',
        'developers/styling',
      ],
    },
    'changelog',
  ],
};

export default sidebars;
