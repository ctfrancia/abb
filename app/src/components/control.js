import React from "react"

function Control(props) {
    console.log(props)
    return(
        <div className="control-container">
            <div>
                <div>
                    <p>x</p>
                    <p>{xValue}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>y</p>
                    <p>{yValue}</p>
                </div>
            </div>
            <div>
                <div>
                    <p>z</p>
                    <p>
                        {zValue}
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <p>diameter</p>
                    <p>{dValue}</p>
                </div>
            </div>
        </div>
    )
}

export default Control