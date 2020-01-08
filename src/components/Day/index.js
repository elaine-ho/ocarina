import React from "react";

class Day extends React.Component{
    render(){
        return(
            <div>
                {this.props.modalDate}
            </div>
        );
    }
}

export default Day;