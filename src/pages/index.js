import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepagePitch, {homepageFaqs} from '@site/src/components/HomepagePitch';
import AcceptedCards from '@site/src/components/AcceptedCards';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const pageDescription =
  'Accept Visa, Mastercard, American Express, and Discover in WooCommerce on WordPress with Stitch Payments. Hosted CardPointe fields, saved cards, and a lower processing commission. Bank transfer coming soon.';

const pageTitle = 'Card payments for WooCommerce';
const socialImage = 'https://docs.stitchpayments.net/img/stitch-social.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--stitch', styles.heroBanner)}>
      <div className="container stitch-hero">
        <div className="stitch-hero__copy">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">
            Card payments for WooCommerce stores, at a lower processing commission. Card numbers stay
            off your server.
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
        </div>
        <figure className="stitch-hero__shot">
          <img
            src="/img/docs/checkout-blocks.png"
            alt="WooCommerce Blocks checkout with the Stitch card form, accepted card icons, and the save-card note."
            width="810"
            height="815"
          />
          <figcaption>The card form on WooCommerce Blocks checkout. The card number is typed in a CardPointe hosted field.</figcaption>
        </figure>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Stitch Payments for WooCommerce',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'WordPress',
    softwareVersion: siteConfig.customFields.pluginVersion,
    url: 'https://docs.stitchpayments.net/',
    description: pageDescription,
    provider: {
      '@type': 'Organization',
      name: 'Stitch Payments',
      url: 'https://www.stitchpayments.net/',
    },
  };
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
    <Layout title={pageTitle} description={pageDescription}>
      <Head>
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialImage} />
        <script type="application/ld+json">{JSON.stringify(softwareLd)}</script>
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
