import React from "react";
import $ from "jquery";
import "bootstrap/dist/js/bootstrap.min";
import "jquery-ui/ui/widgets/datepicker";
import {
    postFulltimeEmployer,
    postParttimeEmployer,
    putFullTimeEmployer,
    putParttimeEmployer
} from "../actions/PostData";
import DropDownBtn from "../components/DropDownBtn";
import {parseBirthdayForServer} from "../utils/Utils";
import {connect} from "react-redux";


class ModalEmployer extends React.Component {
    componentWillReceiveProps = (nextProps) => {
        if (nextProps.data) {
            this.setState(nextProps.data);
            if (nextProps.data.day_salary) {
                this.setState({
                    type: 'congNhat'
                })
            } else {
                this.setState({
                    type: 'bienChe'
                })
            }

        }
        if (nextProps.data == null) {
            this.setState(this.emptyObject)
        }

    }

    emptyObject = {
        "salary_level": "",
        "name": "",
        "month_salary": "",
        "phone": "",
        "birthday": "",
        "allowance": "",
        "department_id": this.props.departments.length > 0 ? this.props.departments[0].id : "",
        day_salary: "",
    }
    onClickSave = () => {
        let data = {
            "name": this.state.name,
            "phone": this.state.phone,
            "birthday": parseBirthdayForServer(this.state.birthday),
            "department_id": this.state.department_id,
        }

        if (this.state.type === "bienChe") {
            data.salary_level = this.state.salary_level;
            data.month_salary = this.state.month_salary;
            data.allowance = this.state.allowance;
            if (this.props.data) {
                putFullTimeEmployer(this.props.data.id, data, this.props.fetchEmployers);
            }
            else {
                postFulltimeEmployer(data, this.props.fetchEmployers);
            }
        }
        if (this.state.type === "congNhat") {
            data.day_salary = this.state.day_salary;
            if (this.props.data) {
                putParttimeEmployer(this.props.data.id, data, this.props.fetchEmployers);
            }
            else {

                postParttimeEmployer(data, this.props.fetchEmployers)
            }
        }
        $('#create').modal('toggle');

    }

    constructor(props) {
        super(props);
        this.state = Object.assign(this.emptyObject, {type: null})
    }

    onChangeText = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    clickType = (type) => {
        this.setState({
            type
        })
    }

    componentDidMount = () => {
        $('#datepicker').datepicker({
            uiLibrary: 'bootstrap4',
            iconsLibrary: 'fontawesome',
            onSelect: (dateText) => {
                this.setState({
                    birthday: dateText
                })
            },
            dateFormat: 'dd/mm/yy'
        });
    }

    renderExtraForm = () => {
        if (this.state.type) {
            switch (this.state.type) {
                case "bienChe":
                    return <div>
                        <label htmlFor="id">Lương tháng</label>
                        <div className="input-group">
                            <input onChange={this.onChangeText} name="month_salary" type="text" className="form-control"
                                   id="id" aria-describedby="basic-addon3" value={this.state.month_salary}/>
                        </div>
                        <label htmlFor="id">Bậc lương</label>
                        <div className="input-group">
                            <input onChange={this.onChangeText} name="salary_level" type="text" className="form-control"
                                   id="id" aria-describedby="basic-addon3" value={this.state.salary_level}/>
                        </div>

                        <label htmlFor="id">Phụ cấp</label>
                        <div className="input-group">
                            <input onChange={this.onChangeText} name="allowance" type="text" className="form-control"
                                   id="id" aria-describedby="basic-addon3" value={this.state.allowance}/>
                        </div>
                    </div>
                    break;
                case "congNhat":
                    return <div>

                        <label htmlFor="id">Lương ngày</label>
                        <div className="input-group">
                            <input name="day_salary" value={this.state.day_salary} onChange={this.onChangeText}
                                   type="text"
                                   className="form-control" id="id" aria-describedby="basic-addon3"/>
                        </div>

                    </div>
                    break;

            }
        }

    }
    onSelectDepartment = (item) => {
        this.setState({
            department_id: item.id
        })
    }

    renderDropDownBtn = () => {
        if (this.props.departments.length > 0) {
            return (
                <DropDownBtn onChange={this.onSelectDepartment} default data={this.props.departments}></DropDownBtn>
            )
        }
    }

    render() {
        return (
            <div className="modal fade" id="create" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Thêm nhân viên</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <label htmlFor="name">Tên nhân viên</label>
                            <div className="input-group">
                                <input onChange={this.onChangeText} value={this.state.name} name="name" type="text"
                                       className="form-control" id="name" aria-describedby="basic-addon3"/>
                            </div>
                            <label htmlFor="datepicker">Ngày tháng năm sinh</label>
                            <div className="input-group date" data-provide="datepicker">
                                <input onClick={this.onChangeText} onChange={this.onChangeText}
                                       value={this.state.birthday}
                                       name="birthday" type="text" className="form-control" id="datepicker"/>
                            </div>
                            <label htmlFor="phone">Số điện thoại</label>
                            <div className="input-group">
                                <input onChange={this.onChangeText} value={this.state.phone} name="phone" type="text"
                                       className="form-control" id="phone" aria-describedby="basic-addon3"/>
                            </div>

                            <div className="btn-group">
                                <label htmlFor="name" className="margin-R10">Chọn phòng ban</label>
                                {this.renderDropDownBtn()}

                            </div>
                            <div className="btn-group btn-middle align-middle">
                                {
                                    (() => {
                                        if (this.props.data) {
                                            if (this.props.data.day_salary === null) {
                                                return (<button className="btn btn-primary"
                                                                id="bien-che">Nhân viên Biên chế
                                                </button>)
                                            }
                                            else {
                                                return (
                                                    <button className="btn btn-info"
                                                            id="cong-nhat">Nhân viên Công nhật
                                                    </button>
                                                )
                                            }
                                        }
                                        else {
                                            let arr = [];
                                            arr.push(<button onClick={this.clickType.bind(this, "bienChe")}
                                                             className="btn btn-primary"
                                                             id="bien-che">Nhân viên Biên chế
                                            </button>);
                                            arr.push(<button onClick={this.clickType.bind(this, "congNhat")}
                                                             className="btn btn-info"
                                                             id="cong-nhat">Nhân viên Công nhật
                                            </button>);
                                            return arr;

                                        }
                                    })()
                                }


                            </div>
                            {
                                this.renderExtraForm()
                            }


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy</button>
                            <button onClick={this.onClickSave} type="button" className="btn btn-primary">Lưu</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        departments: state.app.departments
    }
}

export default connect(mapStateToProps)(ModalEmployer)