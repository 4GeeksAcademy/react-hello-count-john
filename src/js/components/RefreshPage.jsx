import React from "react";

const ResetButton = (props) => {
    return (
        <button className="btn btn-secondary mt-4" onClick={props.Reset}>
            Refresh Counter
        </button>
    );
};

export default ResetButton;