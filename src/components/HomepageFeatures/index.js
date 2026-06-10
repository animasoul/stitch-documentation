import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Built for WooCommerce',
    description: (
      <>
        Native gateway integration for classic checkout and WooCommerce Blocks, with HPOS
        compatibility and subscription support.
      </>
    ),
    link: '/docs/merchants/features',
  },
  {
    title: 'Secure by design',
    description: (
      <>
        Card numbers are tokenized through CardPointe hosted fields. Sensitive card data never
        touches your WordPress server.
      </>
    ),
    link: '/docs/merchants/benefits',
  },
  {
    title: 'Customizable checkout',
    description: (
      <>
        Merchants control branding from the admin panel. Developers can override templates, filter
        hooks, and style the payment form.
      </>
    ),
    link: '/docs/developers/customization',
  },
];

function Feature({title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('stitch-feature-card', styles.featureCard)}>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
        <Link to={link}>Learn more →</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="stitch-partners">
          <p>
            Stitch Payments for WooCommerce connects your store to{' '}
            <a href="https://www.stitchpayments.net/" target="_blank" rel="noopener noreferrer">
              Stitch Payments
            </a>{' '}
            and CardPointe. Plugin development by{' '}
            <a href="https://www.mindk.com/" target="_blank" rel="noopener noreferrer">
              MindK
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
