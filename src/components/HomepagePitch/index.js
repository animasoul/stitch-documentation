import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import HomeIcon from '@site/src/components/HomeIcon';
import BrandText, {Brand} from '@site/src/components/BrandText';

const signupUrl = 'https://www.stitchpayments.net/signup/';

const steps = [
  {
    icon: 'user',
    title: 'Request an account',
    text: (
      <>
        <Link href={signupUrl}>Sign up</Link> with <Brand name="Stitch Payments" />. Your processing
        commission is quoted for your store, below typical gateway rates.
      </>
    ),
  },
  {
    icon: 'plugin',
    title: 'Install the plugin',
    text: 'Add Stitch Payments for WooCommerce and connect the test or live merchant ID from Stitch Payments.',
  },
  {
    icon: 'card',
    title: 'Accept cards',
    text: 'Visa, Mastercard, American Express, and Discover run through CardPointe hosted fields.',
  },
];

const securityControls = [
  {
    icon: 'card',
    title: 'Hosted card fields',
    text: 'The card number is typed in a CardPointe iframe. WordPress receives a token, not the full card number.',
  },
  {
    icon: 'databaseOff',
    title: 'Security code is never stored',
    text: 'The CVV is held in memory only for that authorization request, then discarded. It is never written to the database.',
  },
  {
    icon: 'lock',
    title: 'Tokenizer messages stay locked',
    text: 'Checkout talks to the card field only at the CardPointe origin, so other scripts on the page cannot intercept it.',
  },
  {
    icon: 'key',
    title: 'Credentials go to CardPointe only',
    text: 'API calls use HTTPS, and the plugin accepts only cardconnect.com and cardpointe.com hosts. A mistyped address is ignored.',
  },
  {
    icon: 'fileOff',
    title: 'Sensitive fields are redacted in logs',
    text: 'Tokens, account numbers, CVVs, and passwords are stripped before anything is written to WooCommerce logs.',
  },
  {
    icon: 'vault',
    title: 'Saved cards are vault references',
    text: 'The store keeps the last four digits, brand, expiry, and a CardPointe profile reference. The card itself stays in the CardPointe vault.',
  },
  {
    icon: 'check',
    title: 'AVS and CVV checks',
    text: 'When the bank reports an address or security-code mismatch, the store can accept, hold, or void the payment.',
  },
  {
    icon: 'once',
    title: 'Charges and refunds are sent once',
    text: 'Authorizations and refunds are not retried after a timeout, so a slow response cannot create a second charge.',
  },
];

const rows = [
  ['Card brands', 'Visa, Mastercard, Amex, Discover', 'Usually the same four'],
  ['Hosted card fields', 'Yes', 'Yes'],
  ['Classic and Blocks checkout', 'Yes', 'Yes'],
  ['Saved cards', 'Yes', 'Yes'],
  ['Subscriptions and pre-orders', 'Yes', 'Yes'],
  ['Authorize, refund, and void', 'Yes', 'Yes'],
  ['Surcharge disclosure', 'Yes', 'Often limited'],
  ['Level 2/3 and AVS/CVV checks', 'Yes', 'Often limited'],
  ['Bank transfer', 'soon', 'Varies'],
  ['Processing commission', 'lower', 'Higher published rates'],
];

export const homepageFaqs = [
  {
    question: 'Which cards can a WooCommerce store accept?',
    answer:
      'Visa, Mastercard, American Express, and Discover. The store currency must be USD.',
  },
  {
    question: 'Does the card number reach the WordPress server?',
    answer:
      'No. The card number is entered in a CardPointe hosted field. The store keeps a token, the last four digits, and the expiry.',
  },
  {
    question: 'How does the processing commission compare?',
    answer:
      'Stitch Payments includes the same core WooCommerce checkout features as typical card gateways, at a lower processing commission. The rate is quoted when you sign up.',
  },
  {
    question: 'Can customers pay by bank transfer?',
    answer:
      'Bank transfer is coming soon. Card payments are available now.',
  },
  {
    question: 'How do I start accepting payments?',
    answer:
      'Request a Stitch Payments account, install the plugin, and add the merchant credentials from Stitch.',
  },
];

function Cell({value}) {
  if (value === 'soon') {
    return <span className="stitch-soon">Coming soon</span>;
  }
  if (value === 'lower') {
    return <strong>Lower commission</strong>;
  }
  return value;
}

export default function HomepagePitch() {
  return (
    <>
      <section className="stitch-home-section">
        <div className="container">
          <Heading as="h2">Start accepting cards in three steps</Heading>
          <ol className="stitch-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="stitch-card-head">
                  <span className="stitch-steps__index">{index + 1}</span>
                  <HomeIcon name={step.icon} />
                </span>
                <strong>{step.title}</strong>
                <span>{typeof step.text === 'string' ? <BrandText text={step.text} /> : step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="stitch-home-section">
        <div className="container">
          <Heading as="h2">Same checkout features. Lower processing commission.</Heading>
          <p className="stitch-home-lead">
            <BrandText text="Stitch Payments covers the WooCommerce features merchants expect from gateways such as Stripe, PayPal, and WooPayments, with a lower processing commission. Bank transfer is on the way." />
          </p>
          <div className="stitch-compare-wrap">
            <table className="stitch-compare">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col">Stitch Payments</th>
                  <th scope="col">Other WooCommerce gateways</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([feature, stitch, other]) => (
                  <tr key={feature}>
                    <th scope="row">{feature}</th>
                    <td className="is-stitch">
                      <Cell value={stitch} />
                    </td>
                    <td>
                      <Cell value={other} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="stitch-home-note">
            Your commission is quoted for your volume when you{' '}
            <a href={signupUrl} target="_blank" rel="noopener noreferrer">
              sign up
            </a>
            . Stitch does not publish a single flat rate.
          </p>
        </div>
      </section>

      <section className="stitch-security-band">
        <div className="container">
          <p className="stitch-security-kicker">
            <HomeIcon name="shield" />
            Implemented in the plugin
          </p>
          <Heading as="h2">Security is built into every charge</Heading>
          <p className="stitch-home-lead">
            <BrandText text="The store never holds a full card number or a security code. Each control below is already in Stitch Payments. Together they reduce PCI scope. They are not a PCI certification." />
          </p>
          <ul className="stitch-security">
            {securityControls.map((item) => (
              <li key={item.title}>
                <div className="stitch-security__head">
                  <HomeIcon name={item.icon} />
                  <span className="stitch-security__badge">In place</span>
                </div>
                <strong>{item.title}</strong>
                <span>
                  <BrandText text={item.text} />
                </span>
              </li>
            ))}
          </ul>
          <p className="stitch-home-more">
            <Link to="/docs/merchants/data-and-privacy">Read the data and privacy guide</Link>
          </p>
        </div>
      </section>

      <section className="stitch-home-section">
        <div className="container">
          <Heading as="h2">Common questions</Heading>
          <div className="stitch-faq">
            {homepageFaqs.map((item) => (
              <details key={item.question}>
                <summary>
                  <BrandText text={item.question} />
                </summary>
                <p>
                  <BrandText text={item.answer} />
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="stitch-home-close">
        <div className="container">
          <Heading as="h2">
            <BrandText text="Ready to accept cards in WooCommerce on WordPress?" />
          </Heading>
          <p>
            <BrandText text="Get a Stitch Payments account, then follow the merchant setup guide." />
          </p>
          <div className="stitch-home-cta">
            <Link className="button button--secondary button--lg" href={signupUrl}>
              Get started
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/docs/merchants/getting-started">
              For merchants
            </Link>
          </div>
        </div>
      </section>

      <section className="stitch-home-section">
        <div className="container">
          <div className="stitch-partners">
            <p>
              <Brand name="Stitch Payments" /> for WooCommerce connects your <Brand name="WordPress" /> store to{' '}
              <a href="https://www.stitchpayments.net/" target="_blank" rel="noopener noreferrer">
                <Brand name="Stitch Payments" />
              </a>{' '}
              and <Brand name="CardPointe" />.
            </p>
            <a
              className="stitch-mindk"
              href="https://www.mindk.com/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Plugin development by</span>
              <img className="stitch-mindk__light" src="/img/mindk-logo.svg" alt="MindK" width="116" height="20" />
              <img className="stitch-mindk__dark" src="/img/mindk-logo-white.svg" alt="MindK" width="140" height="24" />
            </a>
            <a
              className="stitch-cardpointe"
              href="https://www.cardpointe.com/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Stitch Payments partners with</span>
              <img className="stitch-cardpointe__light" src="/img/cardpointe-logo.svg" alt="CardPointe" width="500" height="106" />
              <img className="stitch-cardpointe__dark" src="/img/cardpointe-logo-white.svg" alt="CardPointe" width="500" height="106" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
