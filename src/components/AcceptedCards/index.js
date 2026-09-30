const cards = [
  {src: '/img/cards/visa.svg', name: 'Visa'},
  {src: '/img/cards/mastercard.svg', name: 'Mastercard'},
  {src: '/img/cards/amex.svg', name: 'American Express'},
  {src: '/img/cards/discover.svg', name: 'Discover'},
];

export default function AcceptedCards({prominent = false}) {
  return (
    <div
      className={
        prominent
          ? 'stitch-accepted-cards stitch-accepted-cards--prominent'
          : 'stitch-accepted-cards'
      }>
      <p className="stitch-accepted-cards__label">Cards accepted</p>
      <ul>
        {cards.map((card) => (
          <li key={card.name}>
            <img src={card.src} alt={card.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}
