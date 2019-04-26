import React from "react";
import { connect } from "react-redux";
import { getTotalWeight } from "../redux/selectors";

const InformationTabs = ({ totalWeight }) => {
    return(
        <div>
            <div>Total weight {totalWeight}</div>
        </div>
       
    );
};

const mapStateToProps = state => {
const totalWeight = getTotalWeight(state);
return { totalWeight };
};

export default connect(mapStateToProps)(InformationTabs);