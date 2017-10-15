import React from "react";

export default class TableHeader extends React.Component {
    renderRow = () => {
        let arr = []
        switch (this.props.type) {
            case "statistic":
                arr.push(<th className="align-middle text-center" rowSpan="2">Lương</th>)
                break;
            case "management":
                arr.push(<th className="align-middle text-center" rowSpan="2">Sửa</th>);
                arr.push(<th className="align-middle text-center" rowSpan="2">Xóa</th>
                )
                break;

        }
        return arr;
    }
    renderRow2Header = () => {
        let arr = []
        switch (this.props.display) {
            case 1:
                arr.push(
                    <th className="align-middle text-center">Lương tháng</th>);
                arr.push(
                    <th className="align-middle text-center">Bậc lương</th>);
                arr.push(
                    <th className="align-middle text-center">Phụ cấp</th>);
                break;
            case 2:
                arr.push(
                    <th className="align-middle text-center">Lương ngày</th>);
                arr.push(
                    <th className="align-middle text-center">Ngày làm việc</th>);

                break;
            default:
                arr.push(
                    <th className="align-middle text-center">Lương tháng</th>);
                arr.push(
                    <th className="align-middle text-center">Bậc lương</th>);
                arr.push(
                    <th className="align-middle text-center">Phụ cấp</th>);
                arr.push(
                    <th className="align-middle text-center">Lương ngày</th>);

        }
        return arr;
    }
    renderTableHeader = () => {
        let arr = [];
        switch (this.props.display) {
            case 1:
                arr.push(<th className="align-middle text-center" colSpan="3">Nhân viên Biên chế</th>
                );
                break;
            case 2:
                arr.push(<th className="align-middle text-center" colSpan="2">Nhân viên Công nhật</th>)
                break;
            default:
                arr.push(<th className="align-middle text-center" colSpan="3">Nhân viên Biên chế</th>);
                arr.push(<th className="align-middle text-center">Nhân viên Công nhật</th>);
                break;

        }
        return arr
    }
    render = () => {
        return (
            <thead>
            <tr>
                <th className="align-middle text-center" rowSpan="2">#</th>
                <th className="align-middle text-center" rowSpan="2">Tên nhân viên</th>

                <th className="align-middle text-center" rowSpan="2">SDT</th>
                <th className="align-middle text-center" rowSpan="2">Ngày tháng năm sinh</th>
                <th className="align-middle text-center" rowSpan="2">Phòng ban</th>
                {this.renderTableHeader()}
                {
                    this.renderRow()
                }
            </tr>
            <tr>
                {
                    this.renderRow2Header()
                }

            </tr>
            </thead>
        )
    }
}

TableHeader.defaultProps = {
    hasSalary: false,
}