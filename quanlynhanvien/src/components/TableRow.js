import React from 'react'
import {connect} from 'react-redux';
import {numberWithCommas} from '../utils/Utils'
import {parseBirthdayForClient} from '../utils/Utils'
// arrCell.push(<td className="text-center"><input type="text" className="form-control" id="id"
//                                                 aria-describedby="basic-addon3"/></td>)
class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    parseDepartment = (id) => {
        if (this.props.departments) {
            let obj = this.props.departments.find(item => item.id == id)
            if (obj) {
                return obj.name
            }
        }
    }

    onAddWorkingDay = (event) => {
        if (this.props.onInputChange) {
            this.props.onInputChange(event.target.name, event.target.value);
        }
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    renderCellNotNull = (key, listRow) => {
        let arrCell = [];
        switch (key) {
            case "department_id":
                arrCell.push(<td scope="row">{this.parseDepartment(listRow[key])}</td>);
                break;
            case "day_salary":
            case "allowance":
            case "month_salary":
            case "total_salary":
                arrCell.push(<td scope="row">{numberWithCommas(parseInt(listRow[key]).toFixed(0).toString())}</td>);
                break;
            case "birthday":
                arrCell.push(<td scope="row">{parseBirthdayForClient(listRow[key])}</td>);
                break;
            default:
                arrCell.push(<td scope="row">{listRow[key]}</td>);
                break;


        }
        return arrCell;
    }
    renderCell = () => {
        let arrCell = [];
        let listRow = this.props.data;
        for (let key in listRow) {
            if (listRow.hasOwnProperty(key)) {
                switch (this.props.display) {
                    case 1:
                        if (key != "day_salary" && key != "working_day_number") {
                            if (listRow[key] != null) {
                                arrCell.push(...this.renderCellNotNull(key, listRow))
                            }
                            else {
                                arrCell.push(<td className="text-center"><i className="fa fa-ban"/></td>)
                            }
                        }

                        break;
                    case 2:
                        if (key != "month_salary" && key != "salary_level" && key != "allowance") {
                            if (listRow[key] != null) {
                                arrCell.push(...this.renderCellNotNull(key, listRow))
                            }
                            else {
                                if (key == "working_day_number") {
                                    arrCell.push(<td className="text-center"><input type="text"
                                                                                    onChange={this.onAddWorkingDay}
                                                                                    name={listRow.id}
                                                                                    value={this.state.hasOwnProperty(listRow.id) ? this.state[listRow.id] : ""}
                                                                                    className="form-control" id="id"
                                                                                    aria-describedby="basic-addon3"/>
                                    </td>)

                                }
                                else {
                                    arrCell.push(<td className="text-center"><i className="fa fa-ban"/></td>)
                                }
                            }
                        }
                        break;
                    default:

                        if (listRow[key] != null) {
                            arrCell.push(...this.renderCellNotNull(key, listRow))
                        }
                        else {
                            arrCell.push(<td className="text-center"><i className="fa fa-ban"/></td>)
                        }

                        break;
                }

            }


        }

        switch (this.props.type) {
            case "statistic":
                // arrCell.push(<td className="text-center">Lương</td>)
                break;
            case "management":
                arrCell.push(<td>
                    <button data-toggle="modal" data-target="#create" onClick={this.props.onClickEdit}
                            className="btn btn-resetWidth btn-info"><i className="fa fa-edit">&nbsp;&nbsp;</i>Sửa
                    </button>
                </td>);
                arrCell.push(<td>
                    <button onClick={this.props.onClickDelete} className="btn btn-resetWidth btn-danger"><i
                        className="fa fa-remove">&nbsp;&nbsp;</i>Xóa
                    </button>
                </td>)
                break;
        }
        return arrCell;
    }

    render() {
        return (
            <tr>
                {
                    this.renderCell()
                }
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        departments: state.app.departments
    }
}

export default connect(mapStateToProps)(TableRow)