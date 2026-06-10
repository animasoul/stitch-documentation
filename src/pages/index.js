import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--stitch', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/stitch-logo-white.png"
          alt="Stitch Payments"
          className="stitch-hero-logo"
        />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'stitch-home-cta')}>
          <Link className="button button--secondary button--lg" to="/docs/merchants/benefits">
            For merchants
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/developers/overview">
            For developers
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/intro">
            Read the docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Documentation for Stitch Payments for WooCommerce — secure CardPointe credit card processing for classic and Blocks checkout.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
