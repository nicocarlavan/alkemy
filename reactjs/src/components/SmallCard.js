import PropTypes from "prop-types";
import React from "react";


function SmallCard(props) {
    return (
        <React.Fragment>

            < div className="col-md-4 mb-4" >
                <div className={"card border-left-" + props.color + " shadow h-100 py-2"}>
                    <div className="card-body ">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className={"text-xs font-weight-bold text-" + props.color + " text-uppercase mb-1"}>{props.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">${props.total}</div>
                            </div>
                            <div className="col-auto">
                                <i className={"fas " + props.icon + " fa-2x text-gray-300"}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment>
    )
}


SmallCard.propTypes = {
    atributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
        total: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired
    })
}



export default SmallCard;