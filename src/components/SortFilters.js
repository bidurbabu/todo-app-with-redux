import React from "react";
import { connect } from "react-redux";
import { setSortFilter } from "../redux/actions/actions";
import { SORT_FILTERS } from "../constants";


const SortFilters = ({ setSortFilter  }) => {
  return (
    <div>
      {Object.keys(SORT_FILTERS).map(key => {
        return <button key={ key } onClick={() => { setSortFilter(SORT_FILTERS[key]) }}>{SORT_FILTERS[key]}</button>;
      })}
    </div>
  );
};

export default connect(null,{ setSortFilter })(SortFilters);
