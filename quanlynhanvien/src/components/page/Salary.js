import React from "react";
import Container from "../Container";
import Title from "../Title";
import DropDownBtn from "../DropDownBtn";
import TableHeader from "../TableHeader";
import Table from "../Table";
import TableBody from "../TableBody";
import TableRow from "../TableRow";
import {fetchDepartments, fetchSalaryEmployer} from "../../actions/App";
import {postCalcFulltimeSalary, postCalcParttimeSalary} from "../../actions/PostData";
import {connect} from "react-redux";

class Salary extends React.Component {
    componentWillMount = () => {
        this.props.fetchDepartments();
    }

    constructor(props) {
        super(props);
        this.state = {
            employerType: this.props.staffs[0],
            addWorkingDay: {}
        }
    }

    getData = (employerType, workingMonth) => {
        if (employerType && workingMonth) {
            if (employerType.id && workingMonth.id) {
                this.props.fetchSalaryEmployer(employerType.id, workingMonth.id);
            }
        }
    }

    clickStaff = (item) => {
        this.setState({
            employerType: item
        })
        this.getData(item, this.state.selectedWorkingMonth);
    }
    onCellWorkingDayChange = (id, value) => {
        this.setState({
            addWorkingDay: Object.assign(this.state.addWorkingDay, {
                [id]: value
            })
        })
    }
    renderTableRow = () => {
        return this.props.employers.data.map((item) => {
            return (
                <TableRow addWorkingDay={this.state.addWorkingDay} onInputChange={this.onCellWorkingDayChange}
                          type="statistic"
                          display={this.state.employerType.id} data={item}/>
            )

        });
    }
    renderTableBody = () => {
        if (this.props.employers.errors === null) {
            return <TableBody>
                {
                    this.renderTableRow()
                }
            </TableBody>
        }
    }

    onChangeWorkingMonth = (item) => {
        this.setState({
            selectedWorkingMonth: item
        });
        this.getData(this.state.employerType, item);
    }
    onCalcSalary = () => {
        if (this.state.employerType.id == 2) {
            let addWorkingDay = this.state.addWorkingDay;
            for (let key in addWorkingDay) {
                if (addWorkingDay.hasOwnProperty(key)) {
                    let data = {
                        "part_time_employer_id": key,
                        "working_day_number": parseInt(addWorkingDay[key]),
                        "working_month_id": this.state.selectedWorkingMonth.id.toString()
                    }
                    postCalcParttimeSalary(data, this.getData.bind(this, this.state.employerType, this.state.selectedWorkingMonth))
                }
            }
        }
        if (this.state.employerType.id == 1) {
            let employers = this.props.employers;
            employers.data.map((item) => {
                if (item.total_salary == null) {
                    let data = {
                        "full_time_employer_id": item.id,
                        "working_month_id": this.state.selectedWorkingMonth.id.toString()
                    }
                    postCalcFulltimeSalary(data, this.getData.bind(this, this.state.employerType, this.state.selectedWorkingMonth));
                }
            })
        }
        this.setState({
            addWorkingDay: {}
        })

    }
    renderMonth = () => {
        if (this.props.workingMonths.length > 0) {
            return <DropDownBtn onChange={this.onChangeWorkingMonth} data={this.props.workingMonths}/>
        }
    }

    renderDepartment = () => {
        debugger
        if (this.props.departments.length > 0) {
            return <DropDownBtn data={this.props.departments}/>
        }
    }
    renderStaff = () => {
        return <DropDownBtn onChange={this.clickStaff} data={this.props.staffs}/>
    }

    render() {
        return (
            <div>
                <Container>
                    <Title title="Danh sách nhân viên theo phòng ban"/>

                    <div className="btn-group btn-middle align-middle">
                        {
                            this.renderStaff()
                        }
                        {
                            this.renderMonth()
                        }
                    </div>

                    <button onClick={this.onCalcSalary} type="button" className="btn btn-success btn-right"><i
                        className="fa fa-calculator">&nbsp;&nbsp;</i>Tính lương
                    </button>

                    <Table>
                        <TableHeader display={this.state.employerType.id} type="statistic">

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

Salary.defaultProps = {
    staffs: [{
        id: 1,
        name: "Nhân viên biên chế"
    }, {
        id: 2,
        name: "Nhân viên công nhật"
    }]
}

const mapStateToProps = state => {
    return {
        departments: state.app.departments,
        employers: state.app.salaryEmployers,
        workingMonths: state.app.workingMonths
    }
}
export default connect(mapStateToProps, {fetchDepartments, fetchSalaryEmployer})(Salary)