import React from 'react'
import Container from'../Container'
import Title from '../Title'
import DropDownBtn from '../DropDownBtn'
import TableHeader from '../TableHeader'
import Table from '../Table'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import {fetchEmployers, fetchDepartments} from '../../actions/App'
import {connect} from 'react-redux'

class Index extends React.Component {
    componentWillMount = () => {
        this.props.fetchEmployers();
        this.props.fetchDepartments();
    }

    constructor(props) {
        super(props);
        if (this.props.staffs.error == null) {
            if (this.props.staffs.data.length > 0) {
                this.state = {
                    type: this.props.staffs.data[0]
                }
            }
        }
    }

    clickStaff = (item) => {
        this.setState({
            type: item
        })
    }
    renderTableRow = () => {
        return this.props.data.data.map((item) => {
            return (
                <TableRow type="statistic" display={this.state.type.id} data={item}/>
            )

        });
    }
    renderTableBody = () => {
        if (this.props.data.error == null) {
            return <TableBody>
                {
                    this.renderTableRow()
                }
            </TableBody>
        }
    }

    renderDepartment = () => {
        if (this.props.departments.error == null) {
            return <DropDownBtn data={this.props.departments.data}/>
        }
    }
    renderStaff = () => {
        if (this.props.staffs.error == null) {
            return <DropDownBtn clickStaff={this.clickStaff} data={this.props.staffs.data}/>
        }
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                <Container>
                    <Title title="Danh sách nhân viên theo phòng ban"/>

                    <div className="btn-group btn-middle align-middle">

                        {
                            this.renderDepartment()
                        }
                        {
                            this.renderStaff()
                        }
                    </div>

                    <button type="button" className="btn btn-success btn-right"><i
                        className="fa fa-calculator">&nbsp;&nbsp;</i>Tính lương
                    </button>

                    <Table>
                        <TableHeader display={this.state.type.id} type="statistic">

                        </TableHeader>
                        {
                            this.renderTableBody()
                        }


                    </Table>

                </Container>
            </div>
        )
    }
}
Index.defaultProps = {
    data: {
        "errors": null,
        "data": [
            {
                "id": 1,
                "name": "Sinh Nguyen",
                "phone": "01672699288",
                "birthday": "1996-10-08",
                "department_id": 1,
                "month_salary": "9000000.0",
                "salary_level": 2.6,
                "allowance": "900000.0",
                "day_salary": null
            },
            {
                "id": 2,
                "name": "string",
                "phone": "string",
                "birthday": "1996-05-31",
                "department_id": 1,
                "month_salary": null,
                "salary_level": null,
                "allowance": null,
                "day_salary": "800000.0"
            },
            {
                "id": 3,
                "name": "Sinh",
                "phone": "01672699288",
                "birthday": "2017-10-13",
                "department_id": 1,
                "month_salary": "920000.0",
                "salary_level": 2.6,
                "allowance": "800000.0",
                "day_salary": null
            }
        ]
    },
    departments: {
        error: null,
        data: [{
            id: "1",
            name: "Nhân viên"
        },
            {
                id: "1",
                name: "Quản lý"
            }]
    },
    staffs: {
        error: null,
        data: [{
            id: "0",
            name: "Nhân viên biên chế"
        },
            {
                id: "1",
                name: "Nhân viên công nhật"
            }]
    }
}


const mapStateToProps = state => {
    return {
        // departments: state.app.departments,
        data: state.app.employers
    }
}
export default connect(null, {fetchEmployers, fetchDepartments})(Index)