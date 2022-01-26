import React from "react";
let localhost = "http://localhost:3000/images/"

function CategoryCard({ id, category, image }) {
    return (

        <div className="col-lg-3 mb-4">
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    <div className="text-center">
                        <img src={`${localhost + image}`} width="30%" alt={category} /> {category}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CategoryCard;