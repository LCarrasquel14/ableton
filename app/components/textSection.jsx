const TextSection = ({ title, paragraph }) => {
  return (
    <section className="section-container">
      <div className="content">
        <h3 className="subtitle">{title}</h3>
        <p className="paragraph">{paragraph}</p>
      </div>
    </section>
  );
};

export default TextSection;
