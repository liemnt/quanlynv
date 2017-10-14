import React from 'react'
import {connect} from 'react-redux';

class TableRow extends React.Component {
    parseDepartment = (id) => {
        if (this.props.departments) {
            return this.props.departments.find(item => item.id == id).name
        }
    }
    renderCell = () => {
        let arrCell = [];
        let listRow = this.props.data;
        for (let key in listRow) {
            if (listRow.hasOwnProperty(key)) {
                switch (this.props.display) {

                    case "0":
                        if (key != "day_salary") {
                            if (listRow[key] != null) {
                                arrCell.push(<td scope="row">{listRow[key]}</td>)

                            }
                            else {
                                arrCell.push(<td className="text-center"><i className="fa fa-ban"/></td>)
                            }
                        }
                        break;
                    case "1":
                        if (key != "month_salary" && key != "salary_level" && key != "allowance") {
                            if (listRow[key] != null) {

                                arrCell.push(<td scope="row">{listRow[key]}</td>)

                            }
                            else {
                                arrCell.push(<td className="text-center"><i className="fa fa-ban"/></td>)
                            }
                        }
                        break;
                    default:

                        if (listRow[key] != null) {
                            if (key == "department_id") {
                                arrCell.push(<td scope="row">{this.parseDepartment(listRow[key])}</td>)
                            }
                            else {

                                arrCell.push(<td scope="row">{listRow[key]}</td>)
                            }
                        }
                        else {
                            arrCell.push(<td className="text-center"><i className="fa fa-ban"/></td>)
                        }

                        break;
                }

            }

        }
        if (this.props.display) {
            switch (this.props.display) {
                case "0":
                    break;
                case "1":
                    arrCell.push(<td className="text-center"><input type="text" className="form-control" id="id"
                                                                    aria-describedby="basic-addon3"/></td>)
                    break;
            }
        }
        switch (this.props.type) {
            case "statistic":
                arrCell.push(<td className="text-center">Lương</td>)
                break;
            case "management":
                arrCell.push(<td>
                    <button data-toggle="modal" data-target="#create" onClick={this.props.onClickEdit}
                            className="btn btn-info"><i className="fa fa-edit">&nbsp;&nbsp;</i>Sửa
                    </button>
                </td>);
                arrCell.push(<td>
                    <button onClick={this.props.onClickDelete} className="btn btn-danger"><i
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