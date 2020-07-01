import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";

const TechSelectOptions = ({ getTechs, tech: { techs, loading } }) => {
  return <div></div>;
};

TechSelectOptions.propTypes = {};

export default TechSelectOptions;
