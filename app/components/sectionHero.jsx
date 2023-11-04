const SectionHero = ({ title, position }) => {
  return (
    <section className="section-container">
      <div className={`section${position}`}>
        <h1 className="title">{title}</h1>
      </div>
    </section>
  );
};

export default SectionHero;
