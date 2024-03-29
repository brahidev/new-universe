import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ embedId }) => (
  <div className="video-responsive flex items-center w-[100%] max-w-[60rem] mt-[2rem] mx-[auto] justify-center">
    <iframe
      width="80%"
      height="450px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Youtube;
