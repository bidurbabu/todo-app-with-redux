import { SET_SORT_FILTER } from "../actions/actionTypes";
import { SORT_FILTERS } from "../../constants";

const initialState = SORT_FILTERS.NONE;

const sortFilter = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_FILTER: {
            return action.payload.filter;
        }
        default: {
            return state;
        }
    }

};

export default sortFilter;