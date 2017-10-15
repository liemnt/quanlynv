import React from "react";
import Container from "../Container";
import Title from "../Title";
import DropDownBtn from "../DropDownBtn";
import TableHeader from "../TableHeader";
import Table from "../Table";
import TableBody from "../TableBody";
import TableRow from "../TableRow";
import {fetchEmployers} from "../../actions/App";
import {connect} from "react-redux";

class Index extends React.Component {

    getDataEmployer = (item) => {
        this.props.fetchEmployers(item.id);
        this.setState({
            selectedItem: item
        })
    }

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        }
    }

    onDropDownChange = (item) => {
        this.getDataEmployer(item);
    }
    renderTableRow = () => {
        return this.props.employers.data.map((item) => {
            return (
                <TableRow data={item}>
                </TableRow>
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

    renderDepartment = () => {
        if (this.props.departments.length > 0) {
            return <DropDownBtn onChange={this.onDropDownChange} data={this.props.departments}/>
        }
    }

    render() {
        return (
            <div>
                <Container>
                    <Title title="Danh sách nhân viên theo phòng ban"/>

                    <div className="btn-group btn-middle align-middle">

                        {
                            this.renderDepartment()
                        }
                    </div>
                    <Table>
                        <TableHeader type="none">

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
        departments: state.app.departments,
        employers: state.app.employers
    }
}
export default connect(mapStateToProps, {fetchEmployers})(Index)