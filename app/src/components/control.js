import React from "react"
import "./Control.css"

function Control(props) {
    const { measurements } = props
    function cssApplyer(status) {
        if (status === "error") {
            return "circle-error"
        } else if(status === "caution") {
            return "circle-caution"
        } else {
            return "circle-good"
        }
    }
    return(
        <div className="control-container">
            <div className="meta">
                <p>x</p>
                <p>{measurements.control.x.dev}</p>
                <p>{measurements.control.x.devOutTotal}</p>
                <div className={cssApplyer(measurements.control.x.status)}></div>
            </div>
            <div className="meta">
                <p>y</p>
                <p>{measurements.control.y.dev}</p>
                <p>{measurements.control.y.devOutTotal}</p>
                <div className={cssApplyer(measurements.control.y.status)}></div>
            </div>
            <div className="meta">
                <p>z</p>
                <p>{measurements.control.z.dev}</p>
                <p>{measurements.control.z.devOutTotal}</p>
                <p className={cssApplyer(measurements.control.z.status)}></p>
            </div>
            <div className="meta">
                <p>diameter</p>
                <p>{measurements.control.diameter}</p>
            </div>
        </div>
    )
}

export default Control