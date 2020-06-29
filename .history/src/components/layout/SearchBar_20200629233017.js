import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchlogs } from "../../actions/logActions";
const SearchBar = () => {
  return (
    <nav style={{ marginBottom: "30px" }} className='blue-grey darken-2'>
      <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input id='search' type='search' autoComplete='off' />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons'>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
