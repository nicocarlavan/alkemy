import React from "react";
import ContentRowTop from "./ContentRowTop";
import ContentRowMiddle from "./ContentRowMiddle";
import TopBar from "./TopBar";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <ContentRowMiddle />
            </div>
        </div>
    )
}


export default ContentWrapper;