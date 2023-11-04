import React from "react";

const SectionVideo = ({ url, children }) => {
  return (
    <section className="section-container">
      <div className="content">
        <iframe
          className="video"
          src={url}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <p className="text-video">{children}</p>
      </div>
    </section>
  );
};

export default SectionVideo;
