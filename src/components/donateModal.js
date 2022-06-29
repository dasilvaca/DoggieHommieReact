import React from "react"

const Modal = props => {
    console.log("entra")

    if (!props.show) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">xd</h4>
                </div>
                <div className="modal-body">
                    <p> xd</p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-primary">Close</button>
                </div>
            </div>
        </div>
    )
}
export default Modal