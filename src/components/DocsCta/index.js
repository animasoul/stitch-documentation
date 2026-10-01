import Link from '@docusaurus/Link';

const signupUrl = 'https://www.stitchpayments.net/signup/';

export default function DocsCta({nextTo, nextLabel}) {
  return (
    <div className="stitch-docs-cta">
      <Link className="button button--primary" href={signupUrl}>
        Sign up
      </Link>
      <Link className="button button--secondary" to={nextTo}>
        {nextLabel}
      </Link>
    </div>
  );
}
