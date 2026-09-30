const glyphs = {
  store: (
    <>
      <path d="M3.5 5h2.2l1.6 9.2h10.2l1.4-6.2H8" />
      <circle cx="10" cy="18.2" r="1.3" />
      <circle cx="16.2" cy="18.2" r="1.3" />
    </>
  ),
  shield: <path d="M12 3.5 19 6.2v5.6c0 4.4-2.9 7.2-7 8.7-4.1-1.5-7-4.3-7-8.7V6.2L12 3.5Z" />,
  sliders: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
      <circle cx="8" cy="7" r="1.6" />
      <circle cx="15" cy="12" r="1.6" />
      <circle cx="10" cy="17" r="1.6" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 19c.8-2.8 2.9-4 5.5-4s4.7 1.2 5.5 4" />
    </>
  ),
  plugin: (
    <>
      <path d="M12 4v9" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 19h14" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h4" />
    </>
  ),
  databaseOff: (
    <>
      <path d="M3.5 12S7 7 12 7s8.5 5 8.5 5-3.5 5-8.5 5-8.5-5-8.5-5Z" />
      <circle cx="12" cy="12" r="2" />
      <path d="m5 19 14-14" />
    </>
  ),
  lock: (
    <>
      <rect x="6" y="11" width="12" height="8.5" rx="2" />
      <path d="M8.2 11V8.2a3.8 3.8 0 0 1 7.6 0V11" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="14" r="3.2" />
      <path d="M11 14h9" />
      <path d="M17 14v2.5" />
      <path d="M20 14v1.8" />
    </>
  ),
  fileOff: (
    <>
      <path d="M7 3.5h7l4 4V20H7V3.5Z" />
      <path d="M14 3.5V8h4" />
      <path d="M9 13h6" />
      <path d="M9 16h3" />
      <path d="M5 19 19 5" />
    </>
  ),
  vault: (
    <>
      <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 9.4V8" />
      <path d="M12 16v-1.4" />
      <path d="M9.4 12H8" />
      <path d="M16 12h-1.4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12.2 2.3 2.3 4.7-5" />
    </>
  ),
  once: (
    <>
      <path d="M5 12h12" />
      <path d="m13 7 5 5-5 5" />
    </>
  ),
};

export default function HomeIcon({name}) {
  return (
    <span className="stitch-card-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        {glyphs[name]}
      </svg>
    </span>
  );
}
