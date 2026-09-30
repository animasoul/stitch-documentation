const brands = [
  {
    names: ['Stitch Payments'],
    src: '/img/logo-stitch-payments-icon.png',
  },
  {
    names: ['WordPress'],
    light: '/img/wordpress-wmark.png',
    dark: '/img/wordpress-wmark-white.png',
  },
  {
    names: ['American Express'],
    src: '/img/cards/amex.svg',
  },
  {
    names: ['Mastercard'],
    src: '/img/cards/mastercard.svg',
  },
  {
    names: ['Discover'],
    src: '/img/cards/discover.svg',
  },
  {
    names: ['Visa'],
    src: '/img/cards/visa.svg',
  },
  {
    names: ['Amex'],
    src: '/img/cards/amex.svg',
  },
];

const pattern = new RegExp(`(${brands.map((brand) => brand.names[0]).join('|')})`, 'g');

function brandFor(name) {
  return brands.find((brand) => brand.names.includes(name));
}

function Mark({brand}) {
  const word = brand.wordmark ? ' stitch-brand__mark--word' : '';
  if (brand.src) {
    return <img className={`stitch-brand__mark${word}`} src={brand.src} alt="" />;
  }
  return (
    <>
      <img className={`stitch-brand__mark stitch-brand__mark--light${word}`} src={brand.light} alt="" />
      <img className={`stitch-brand__mark stitch-brand__mark--dark${word}`} src={brand.dark} alt="" />
    </>
  );
}

export function Brand({name}) {
  const brand = brandFor(name);
  if (!brand) {
    return name;
  }
  return (
    <span className="stitch-brand">
      <Mark brand={brand} />
      {name}
    </span>
  );
}

export default function BrandText({text}) {
  if (typeof text !== 'string') {
    return text || null;
  }
  const parts = text.split(pattern);
  return parts.map((part, index) => {
    const brand = brandFor(part);
    if (!brand) {
      return part;
    }
    return (
      <span className="stitch-brand" key={`${part}-${index}`}>
        <Mark brand={brand} />
        {part}
      </span>
    );
  });
}
