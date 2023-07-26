import React from "react";

let CssCord = (props) => {
    return(
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <h3>{props.message}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ducimus. Quia, incidunt, quod quos provident voluptate obcaecati cum animi itaque, earum soluta reprehenderit similique iusto!</p>
                </div>
            </div>
        </React.Fragment>

    )
};
export default CssCord;