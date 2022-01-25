import PropTypes from "prop-types";

function SmallCard({ cardInfo }) {
    return (

        < div className="col-md-4 mb-4" >
            <div className={"card border-left-" + cardInfo.color + " shadow h-100 py-2"}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={"text-xs font-weight-bold text-" + cardInfo.color + " text-uppercase mb-1"}>{cardInfo.title}</div>
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{cardInfo.total}</div>
                        </div>
                        <div className="col-auto">
                            <i className={"fas " + cardInfo.icon + " fa-2x text-gray-300"}></i>
                        </div>
                    </div>
                </div>
            </div>
        </div >
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