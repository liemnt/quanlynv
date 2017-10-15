import React from 'react'
import Container from'../Container'
import Title from '../Title'
import DropDownBtn from '../DropDownBtn'
import TableHeader from '../TableHeader'
import Table from '../Table'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import {fetchEmployers, fetchDepartments, fetchMaxSalary} from '../../actions/App'
import {connect} from 'react-redux'

class Statistic extends React.Component {
    // componentWillMount = () => {
    // }
    renderTableRow = () => {

        return (
            <TableRow display={this.display()} type="statistic" data={this.props.maxSalary.data}></TableRow>
        )

    }
    renderTableBody = () => {
        if (this.props.maxSalary.errors === null) {
            return <TableBody>
                {
                    this.renderTableRow()
                }
            </TableBody>
        }
    }

    onChangeWorkingMonth = (item) => {
        // this.setState({
        //     selectedWorkingMonth: item
        // });
        this.props.fetchMaxSalary(item.id);
    }

    renderMonth = () => {
        if (this.props.workingMonths.length > 0) {
            return <DropDownBtn onChange={this.onChangeWorkingMonth} data={this.props.workingMonths}/>
        }
    }

    display = () => {
        if (this.props.maxSalary.errors === null) {
            if (this.props.maxSalary.data.day_salary) {
                return 2
            }
            return 1
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
                        <TableHeader display={this.display()} type="statistic">

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


const mapStateToProps = state => {
    return {
        maxSalary: state.app.maxSalary,
        workingMonths: state.app.workingMonths
    }
}
export default connect(mapStateToProps, {fetchEmployers, fetchDepartments, fetchMaxSalary})(Statistic)