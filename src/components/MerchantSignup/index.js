import Link from '@docusaurus/Link';

const signupUrl = 'https://www.stitchpayments.net/signup/';

export default function MerchantSignup({children}) {
  return (
    <p className="stitch-docs-signup">
      <Link className="stitch-signup" href={signupUrl}>
        Sign up
      </Link>
      <span>{children || 'for a Stitch Payments account.'}</span>
    </p>
  );
}
