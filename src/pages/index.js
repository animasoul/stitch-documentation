import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepagePitch, {homepageFaqs} from '@site/src/components/HomepagePitch';
import AcceptedCards from '@site/src/components/AcceptedCards';
import BrandText from '@site/src/components/BrandText';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const pageDescription =
  'Accept Visa, Mastercard, American Express, and Discover in WooCommerce on WordPress with Stitch Payments. Hosted CardPointe fields, saved cards, and a lower processing commission. Bank transfer coming soon.';

const socialImage = 'https://docs.stitchpayments.net/img/stitch-social.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const pluginVersion = siteConfig.customFields.pluginVersion;

  return (
    <header className={clsx('hero hero--stitch', styles.heroBanner)}>
      <div className="container">
        <img
          src="/img/stitch-logo-white.png"
          alt="Stitch Payments"
          className="stitch-hero-logo"
        />
        <Heading as="h1" className="hero__title">
          <BrandText text={siteConfig.title} />
        </Heading>
        <p className="hero__subtitle">
          Accept Visa, Mastercard, American Express, and Discover in WooCommerce on WordPress. Card
          numbers stay in CardPointe hosted fields, at a lower processing commission than typical
          gateways.
        </p>
        <AcceptedCards prominent />
        <div className={clsx(styles.buttons, 'stitch-home-cta')}>
          <Link className="button button--secondary button--lg" href="https://www.stitchpayments.net/signup/">
            Get started
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/merchants/getting-started">
            For merchants
          </Link>
        </div>
        <p className="stitch-hero-links">
          <Link to="/docs/developers/overview">For developers</Link>
          <Link to="/docs/intro">Documentation</Link>
          <Link to="/docs/changelog">Version {pluginVersion}</Link>
        </p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homepageFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <Layout title={siteConfig.title} description={pageDescription}>
      <Head>
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
      </Head>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepagePitch />
      </main>
    </Layout>
  );
}
