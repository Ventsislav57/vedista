export default function Logo({ className = "h-9 w-9" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-badge.png"
      alt=""
      aria-hidden="true"
      className={`${className} shrink-0 object-contain`}
    />
  );
}
