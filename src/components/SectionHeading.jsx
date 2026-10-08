export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number} /</span> {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
