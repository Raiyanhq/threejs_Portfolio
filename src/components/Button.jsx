export default function Button({
  name,
  isBeam = false,
  containerClass = '',
  ...props
}) {
  return (
    <button className={`button button-primary ${containerClass}`} {...props}>
      {isBeam && <span className="status-dot" />}
      {name}
    </button>
  );
}
