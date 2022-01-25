import ContentRowTotals from "./ContentRowTotals";
import ContentRowTitle from "./ContentRowTitle";

function ContentRowTop() {
    return (
        <div className="container-fluid">
            {/* Content Row Title*/}
            <ContentRowTitle />
            {/* Content Row Totals*/}
            <ContentRowTotals />
        </div>
    )
}

export default ContentRowTop;