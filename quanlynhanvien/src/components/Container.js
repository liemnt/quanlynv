import React from "react";

export default class Container extends React.Component {
    render() {
        return (
            <div className="bg-light container management">
                {
                    this.props.children
                }
            </div>
        )
    }
}