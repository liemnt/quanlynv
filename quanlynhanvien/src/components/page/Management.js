import React from 'react'
import Container from'../Container'
import Title from '../Title'
import DropDownBtn from '../DropDownBtn'
import TableHeader from '../TableHeader'
import Table from '../Table'
import TableBody from '../TableBody'
import TableRow from '../TableRow'
import {fetchDepartments, fetchEmployers} from '../../actions/App'
import {deleteEmployer} from '../../actions/PostData'
import {connect} from 'react-redux'
import ModalEmployer from '../ModalEmployer'

class Management extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDepartment: null,
            selectedItem: null

        }
    }


    onClickDelete = (item) => {
        deleteEmployer(item.id, this.props.fetchEmployers.bind(this, this.state.selectedDepartment.id))
    }

    onClickEdit = item => {
        this.setState({
            selectedItem: item
        })
    }
    renderTableRow = () => {
        return this.props.employers.data.map((item) => {
            return (
                <TableRow onClickEdit={this.onClickEdit.bind(this, item)}
                          onClickDelete={this.onClickDelete.bind(this, item)}
                          type="management" isControl data={item}></TableRow>
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

    onDepartmentChange = (item) => {
        this.props.fetchEmployers(item.id)
        this.setState({
            selectedDepartment: item
        })
    }

    renderDepartment = () => {
        if (this.props.departments.length > 0) {
            return <DropDownBtn onChange={this.onDepartmentChange} data={this.props.departments}/>
        }
    }
    onClickAdd = () => {
        console.log('clickAdd')
        this.setState({
            selectedItem: null
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Title title="Quản lý nhân viên"/>
                    <div className="btn-group btn-middle align-middle">
                        {
                            this.renderDepartment()

                        }


                    </div>
                    <button onClick={this.onClickAdd} data-toggle="modal" data-target="#create" type="button"
                            className="btn btn-success btn-right"><i
                        className="fa fa-plus">&nbsp;&nbsp;</i>
                        Thêm nhân viên
                    </button>
                    <Table>
                        <TableHeader type="management">

                        </TableHeader>
                        {
                            this.renderTableBody()
                        }


                    </Table>

                </Container>
                <ModalEmployer data={this.state.selectedItem}
                               fetchEmployers={this.props.fetchEmployers.bind(this, this.state.selectedDepartment ? this.state.selectedDepartment.id : null)}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        departments: state.app.departments,
        employers: state.app.employers,
        workingMonths: state.app.workingMonths
    }
}
export default connect(mapStateToProps, {fetchEmployers, fetchDepartments})(Management)