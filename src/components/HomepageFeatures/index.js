import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import HomeIcon from '@site/src/components/HomeIcon';
import styles from './styles.module.css';

const FeatureList = [
  {
    icon: 'store',
    title: 'Built for WooCommerce',
    description:
      'A WordPress plugin for classic checkout and WooCommerce Blocks, with HPOS compatibility, subscription renewals, and WooCommerce Pre-Orders.',
    link: '/docs/merchants/features',
    linkLabel: 'Merchant features',
  },
  {
    icon: 'shield',
    title: 'Secure by design',
    description:
      'Card numbers are tokenized through CardPointe hosted fields. Sensitive card data never touches your WordPress server.',
    link: '/docs/merchants/data-and-privacy',
    linkLabel: 'Security and privacy',
  },
  {
    icon: 'sliders',
    title: 'Customizable checkout',
    description:
      'Merchants control branding from the admin panel. Developers can override templates, filter hooks, and style the payment form.',
    link: '/docs/developers/customization',
    linkLabel: 'Customize checkout',
  },
];

function Feature({icon, title, description, link, linkLabel}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('stitch-feature-card', styles.featureCard)}>
        <div className="stitch-card-head">
          <HomeIcon name={icon} />
          <Heading as="h3">{title}</Heading>
        </div>
        <p>{description}</p>
        <Link to={link}>{linkLabel}</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx(styles.features, 'stitch-home-band')}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
