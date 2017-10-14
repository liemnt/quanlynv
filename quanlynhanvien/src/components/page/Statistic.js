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

class Statistic extends React.Component {
    componentWillMount = () => {

    }
    renderTableRow = () => {
        return this.props.data.data.map((item) => {
            return (
                <TableRow type="statistic" data={item}></TableRow>
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

    renderMonth = () => {
        if (this.props.month.error == null) {
            return <DropDownBtn data={this.props.month.data}/>
        }
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                <Container>
                    <Title title="Nhân viên có lương cao nhất"/>
                    <div className="btn-group btn-middle align-middle">
                        {
                            this.renderMonth()
                        }

                    </div>
                    <Table>
                        <TableHeader type="statistic">

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

Statistic.defaultProps = {
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
    month: {
        error: null,
        data: [{
            id: "1",
            name: "5/2017"
        },
            {
                id: "1",
                name: "5/2017"
            }]
    }
}


const mapStateToProps = state => {
    return {
        // departments: state.app.departments,
        data: state.app.employers
    }
}
export default connect(null, {fetchEmployers, fetchDepartments})(Statistic)