import React from 'react'

export default class Table extends React.Component {
    render() {
        return (
            <table className="table table-striped table-bordered">
                {
                    this.props.children
                }
            </table>
        )
    }
}