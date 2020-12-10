import React from "react";

function Filters({ value, onFilter, showStarred, filterStarred }) {
  return (
    <div className="d-flex justify-content-start align-items-center">
      <input
        className="form-control form-control-lg m-3 w-75"
        type="text"
        placeholder="search..."
        value={value}
        onChange={onFilter}
      />
      <button
        className={`btn ${showStarred ? "btn-secondary" : "btn-primary"}`}
        onClick={filterStarred}
      >
        Starred Repos
      </button>
    </div>
  );
}

export default Filters;
