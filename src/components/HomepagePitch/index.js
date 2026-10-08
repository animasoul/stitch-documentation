import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import HomeIcon from '@site/src/components/HomeIcon';

const signupUrl = 'https://www.stitchpayments.net/signup/';
const demoUrl = 'https://stitch.ajpartnersltd.com/';

const steps = [
  {
    title: 'Request an account',
    text: (
      <>
        <Link href={signupUrl}>Sign up</Link> with Stitch Payments. Your processing commission is
        quoted for your store, below typical gateway rates.
      </>
    ),
  },
  {
    title: 'Install the plugin',
    text: 'Add Stitch Payments for WooCommerce and connect the test or live merchant ID from Stitch Payments.',
  },
  {
    title: 'Accept cards',
    text: 'Visa, Mastercard, American Express, and Discover run through CardPointe hosted fields.',
  },
];

const securityControls = [
  {
    icon: 'card',
    lead: true,
    title: 'Hosted card fields',
    text: 'The card number is typed in a CardPointe iframe. WordPress receives a token, not the full card number.',
    to: '/docs/merchants/data-and-privacy#how-card-tokenization-works',
  },
  {
    icon: 'databaseOff',
    lead: true,
    title: 'Security code is never stored',
    text: 'The CVV is held in memory only for that authorization request, then discarded. It is never written to the database.',
    to: '/docs/merchants/data-and-privacy#during-checkout--temporary-data',
  },
  {
    icon: 'lock',
    title: 'Tokenizer messages stay locked',
    text: 'Checkout talks to the card field only at the CardPointe origin, so other scripts on the page cannot intercept it.',
    to: '/docs/merchants/data-and-privacy#how-card-tokenization-works',
  },
  {
    icon: 'key',
    title: 'Credentials go to CardPointe only',
    text: 'API calls use HTTPS, and the plugin accepts only cardconnect.com and cardpointe.com hosts. A mistyped address is ignored.',
    to: '/docs/merchants/getting-started#api-credentials',
  },
  {
    icon: 'fileOff',
    title: 'Sensitive fields are redacted in logs',
    text: 'Tokens, account numbers, CVVs, and passwords are stripped before anything is written to WooCommerce logs.',
    to: '/docs/merchants/data-and-privacy#logging',
  },
  {
    icon: 'vault',
    lead: true,
    title: 'Saved cards are vault references',
    text: 'The store keeps the last four digits, brand, expiry, and a CardPointe profile reference. The card itself stays in the CardPointe vault.',
    to: '/docs/merchants/data-and-privacy#saved-payment-methods',
  },
  {
    icon: 'check',
    title: 'Address check (AVS) and CVV',
    text: 'When the bank reports an address or security-code mismatch, the store can accept, hold, or void the payment.',
    to: '/docs/merchants/card-checks',
  },
  {
    icon: 'once',
    title: 'Charges and refunds are sent once',
    text: 'Authorizations and refunds are not retried after a timeout, so a slow response cannot create a second charge.',
    to: '/docs/merchants/features#payment-processing',
  },
];

const rows = [
  {
    feature: 'US online card rate',
    stitch: 'lower',
    woo: '2.9% + $0.30',
    stripe: '2.9% + $0.30',
    paypal: '2.99% + $0.49',
  },
  {
    feature: 'Card brands',
    stitch: 'Visa, Mastercard, Amex, Discover',
    woo: 'Same four',
    stripe: 'Same four',
    paypal: 'Same four, plus PayPal and Venmo',
  },
  {
    feature: 'Hosted card fields',
    stitch: 'included',
    woo: 'included',
    stripe: 'included',
    paypal: {kind: 'extra', detail: 'Advanced Card Processing'},
  },
  {
    feature: 'Classic and Blocks checkout',
    stitch: 'included',
    woo: 'included',
    stripe: 'included',
    paypal: 'included',
  },
  {
    feature: 'Saved cards',
    stitch: 'included',
    woo: 'included',
    stripe: 'included',
    paypal: {kind: 'extra', detail: 'Account approval'},
  },
  {
    feature: 'Subscriptions',
    stitch: {kind: 'included', detail: 'Renewals in the plugin'},
    woo: {kind: 'extra', detail: 'Subscriptions extension, $279/year'},
    stripe: {kind: 'extra', detail: 'Subscriptions extension, $279/year'},
    paypal: {kind: 'extra', detail: 'Paid extension, plus approval'},
  },
  {
    feature: 'Pre-orders',
    stitch: {kind: 'included', detail: 'Release charge in the plugin'},
    woo: {kind: 'extra', detail: 'Pre-Orders extension'},
    stripe: {kind: 'extra', detail: 'Pre-Orders extension'},
    paypal: {kind: 'extra', detail: 'Paid extension, plus approval'},
  },
  {
    feature: 'Authorize, refund, and void',
    stitch: 'included',
    woo: 'included',
    stripe: 'included',
    paypal: 'included',
  },
  {
    feature: 'Card surcharge disclosure',
    emphasis: true,
    stitch: 'included',
    woo: 'missing',
    stripe: 'missing',
    paypal: 'missing',
  },
  {
    feature: 'Level 2/3 commercial data',
    emphasis: true,
    stitch: 'included',
    woo: 'missing',
    stripe: {kind: 'limited', detail: 'Virtual goods, Visa and Mastercard'},
    paypal: 'missing',
  },
  {
    feature: 'Address check (AVS) and CVV no-match',
    emphasis: true,
    stitch: 'included',
    woo: 'missing',
    stripe: 'missing',
    paypal: 'missing',
  },
  {
    feature: 'Bank transfer',
    stitch: 'soon',
    woo: 'missing',
    stripe: {kind: 'included', detail: '0.8%, $5 cap'},
    paypal: 'missing',
  },
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
      'Stitch Payments includes hosted card fields, saved cards, surcharge disclosure, and Level 2/3 data at a lower processing commission. WooPayments and Stripe publish 2.9% + $0.30 for US online cards. PayPal publishes 2.99% + $0.49 for cards. Stitch quotes the rate when you sign up.',
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

const statusLabels = {
  included: 'Included',
  extra: 'Extra',
  missing: 'Not included',
  limited: 'Limited',
  soon: 'Coming soon',
};

function Cell({value}) {
  if (value === 'lower') {
    return <strong>Lower commission</strong>;
  }
  const status = typeof value === 'string' ? {kind: value} : value;
  if (status && statusLabels[status.kind]) {
    return (
      <span className="stitch-status">
        <span className={`stitch-status__label is-${status.kind}`}>{statusLabels[status.kind]}</span>
        {status.detail ? <span className="stitch-status__detail">{status.detail}</span> : null}
      </span>
    );
  }
  return value;
}

const leadSecurity = securityControls.filter((item) => item.lead);
const otherSecurity = securityControls.filter((item) => !item.lead);

export default function HomepagePitch() {
  return (
    <>
      <section className="stitch-home-section stitch-home-band">
        <div className="container">
          <Heading as="h2">Start accepting cards in three steps</Heading>
          <ol className="stitch-steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="stitch-steps__title">
                  <span className="stitch-steps__index">{index + 1}</span>
                  <strong>{step.title}</strong>
                </span>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="stitch-home-section">
        <div className="container">
          <Heading as="h2">Same checkout features. Lower processing commission.</Heading>
          <p className="stitch-home-lead">
            Stitch Payments is compared here with WooPayments, Stripe, and PayPal, the payment plugins
            US WooCommerce stores use most. The same checkout features are included with Stitch, at a
            lower processing commission. Bank transfer is on the way. The marked rows are included
            with Stitch and missing from the other plugins.
          </p>
          <div className="stitch-compare-wrap">
            <table className="stitch-compare">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  <th scope="col" className="is-stitch">Stitch Payments</th>
                  <th scope="col">WooPayments</th>
                  <th scope="col">Stripe</th>
                  <th scope="col">PayPal</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.feature} className={row.emphasis ? 'is-diff' : undefined}>
                    <th scope="row">{row.feature}</th>
                    <td className="is-stitch">
                      <Cell value={row.stitch} />
                    </td>
                    <td>
                      <Cell value={row.woo} />
                    </td>
                    <td>
                      <Cell value={row.stripe} />
                    </td>
                    <td>
                      <Cell value={row.paypal} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="stitch-home-note">
            WooPayments, Stripe, and PayPal prices were checked on October 1, 2026. PayPal last updated
            its US fee schedule on September 1, 2026.
          </p>
          <p className="stitch-home-note">
            Your commission is quoted for your volume when you{' '}
            <a href={signupUrl} target="_blank" rel="noopener noreferrer">
              sign up
            </a>
            . Stitch does not publish a single flat rate. The other rates are the published US domestic
            online card prices:{' '}
            <a href="https://woocommerce.com/document/woopayments/fees/" target="_blank" rel="noopener noreferrer">
              WooPayments
            </a>
            ,{' '}
            <a href="https://stripe.com/pricing" target="_blank" rel="noopener noreferrer">
              Stripe
            </a>
            , and{' '}
            <a href="https://www.paypal.com/us/business/paypal-business-fees" target="_blank" rel="noopener noreferrer">
              PayPal
            </a>
            . PayPal Checkout and Venmo are 3.49% + $0.49. Stripe bank debit is 0.8% with a $5 cap.
            Subscription products use{' '}
            <a href="https://woocommerce.com/products/woocommerce-subscriptions/" target="_blank" rel="noopener noreferrer">
              WooCommerce Subscriptions
            </a>
            , listed at $279 a year, including with Stitch. Stitch runs the renewal and pre-order release
            charge in the plugin. WooPayments no longer includes its own subscription billing. PayPal card
            fields, saved cards, and flexible renewals need PayPal approval.
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
            The store never holds a full card number or a security code. Each control below is already
            in Stitch Payments. Together they reduce PCI scope. They are not a PCI certification.
          </p>
          <ul className="stitch-security stitch-security--lead">
            {leadSecurity.map((item) => (
              <li key={item.title}>
                <Link className="stitch-security__card" to={item.to}>
                  <div className="stitch-security__head">
                    <HomeIcon name={item.icon} />
                    <span className="stitch-security__badge">In place</span>
                  </div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="stitch-security-quiet">
            {otherSecurity.map((item) => (
              <li key={item.title}>
                <Link to={item.to}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </Link>
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
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="stitch-home-close">
        <div className="container">
          <Heading as="h2">Ready to accept cards?</Heading>
          <Link className="button button--primary button--lg stitch-signup" href={signupUrl}>
            Get started
          </Link>
          <p className="stitch-home-note">
            <Link href={demoUrl}>View the demo shop</Link>
          </p>
        </div>
      </section>

      <section className="stitch-partner-strip">
        <div className="container">
          <div className="stitch-partners">
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
