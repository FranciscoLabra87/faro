/* Iconos SVG compartidos. Heredan color y trazo de la clase .svgico
   (definida en globals.css), salvo que se indique lo contrario. */

type IconProps = {
  className?: string;
};

export function IconCheck({ className = 'svgico' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function IconCross({ className = 'svgico cross' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function IconLock({ className = 'lock' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x={5} y={11} width={14} height={9} rx={2} />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

export function IconArrow({ className = 'svgico' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconExternal({ className = 'svgico' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function IconChevron({ className = 'svgico chev' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconChat({ className = 'svgico' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M7 8h10M7 12h7M5 20l2.5-3H18a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3" />
    </svg>
  );
}

export function IconMail({ className = 'svgico' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M4 6.5h16v11H4zM4 7l8 6 8-6" />
    </svg>
  );
}

export function IconSend({ className = 'svgico' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="m4 12 15-7-4 14-3-6-8-1Z" />
    </svg>
  );
}

export function IconBurger({ className = 'svgico' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}
