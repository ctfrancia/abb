import React from "react"
import "./Control.css"

function Control(props) {
    console.log("inside control component", props)
    const { feature } = props
    return(
        <div className="control-container">
            <div className="individual-container">
                <div>
                    <p>x</p>
                    <p>{feature.control.x}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>y</p>
                    <p>{feature.control.y}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>z</p>
                    <p>
                        {feature.control.z}
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <p>diameter</p>
                    <p>{feature.control.diameter}</p>
                </div>
            </div>
        </div>
    )
}

export default Control