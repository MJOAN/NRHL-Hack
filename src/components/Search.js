import React from "react";

const Search = props =>
  <form>
    <div className="panel-heading">
      <h2>
        Hautelook Lunch App! 
      </h2>
    </div>

    <div className="form-group">
      <label htmlFor="search">Search:</label>
      
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="search"
        type="text"
        className="form-control"
        placeholder="Search For Lunch"
        id="search"
      />

      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>;

export default Search;
