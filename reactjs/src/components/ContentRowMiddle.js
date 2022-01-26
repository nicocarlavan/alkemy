import React from "react";
import Categories from "./Categories"
import ListLastTen from "./ListLastTen";

function ContentRowMiddle() {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Categories */}
                <Categories />
            </div>
            {/* Last 10 Records */}
            <ListLastTen />
        </div >
    )
}

export default ContentRowMiddle;