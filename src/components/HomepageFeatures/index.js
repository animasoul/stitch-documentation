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
        compatibility, subscription renewals, and WooCommerce Pre-Orders.
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
            and CardPointe.
          </p>
          <a
            className="stitch-mindk"
            href="https://www.mindk.com/"
            target="_blank"
            rel="noopener noreferrer">
            <span>Plugin development by</span>
            <img
              className="stitch-mindk__light"
              src="/img/mindk-logo.svg"
              alt="MindK"
              width="116"
              height="20"
            />
            <img
              className="stitch-mindk__dark"
              src="/img/mindk-logo-white.svg"
              alt="MindK"
              width="140"
              height="24"
            />
          </a>
          <a
            className="stitch-cardpointe"
            href="https://www.cardpointe.com/"
            target="_blank"
            rel="noopener noreferrer">
            <span>Stitch Payments partners with</span>
            <img
              className="stitch-cardpointe__light"
              src="/img/cardpointe-logo.svg"
              alt="CardPointe"
              width="522"
              height="165"
            />
            <img
              className="stitch-cardpointe__dark"
              src="/img/cardpointe-logo-white.svg"
              alt="CardPointe"
              width="700"
              height="300"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
