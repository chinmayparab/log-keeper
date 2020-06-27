import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className='collection-item'>
      <div> {tech.firstname} </div>
      <a href='#!' className='secondary-content'></a>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
};

export default TechItem;
