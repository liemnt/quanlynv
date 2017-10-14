import React from 'react'
import 'bootstrap/dist/js/bootstrap.min'

import 'popper.js/dist/umd/popper.min'
import classNames from 'classnames'


export default class DropDownBtn extends React.Component {
    parseName = (item) => {
        return item.name ? item.name : item.month + "/" + item.year
    }

    constructor(props) {
        super(props);
        this.state = {
            clickedItem: this.props.data[0]
        }
        if (this.props.onChange) {
            this.props.onChange(this.props.data[0]);
        }
    }

    onClick = (item) => {
        this.setState({
            clickedItem: item
        })
        if (this.props.onChange) {
            this.props.onChange(item);
        }
    }
    renderDepartment = () => {
        return this.props.data.map((item) => {
            return <a onClick={this.onClick.bind(this, item)} key={item.id} className="dropdown-item"
                      href="#">{this.parseName(item)}</a>
        })
    }

    render() {
        return (
            <span>
                <button type="button"
                        className={classNames("btn dropdown-toggle", {"btn-primary": !this.props.default})}
                        data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                    {
                        this.parseName(this.state.clickedItem)
                    }
                </button>
                <div className="dropdown-menu">
                    {this.renderDepartment()}
                </div>
            </span>
        )

    }
}