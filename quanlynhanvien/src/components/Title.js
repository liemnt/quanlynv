import React from "react";

export default class Title extends React.Component {
    render() {
        return (
            <div>
                <h3 className="text-center">{this.props.title}</h3>
            </div>
        )
    }
}