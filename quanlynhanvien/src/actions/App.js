import * as Types from "../constants/App";
import axios from "../config/axios";
import * as api from "../config/api";

export function fetchEmployers(departmentID) {
    return function (dispatch) {
        axios.get(api.apiGetEmployers(departmentID)).then(
            (response) => {
                dispatch({
                    type: Types.FETCH_EMPLOYERS,
                    serverData: response.data

                })
            }).catch((err) => {
            console.log(err)


        })
    }


}

export function fetchEmployersManagement(departmentID) {
    return function (dispatch) {
        axios.get(api.apiGetEmployers(departmentID)).then(
            (response) => {
                dispatch({
                    type: Types.FETCH_DEPARTMENTS_MANAGEMENT,
                    serverData: response.data

                })
            }).catch((err) => {
            console.log(err)


        })
    }


}

export function fetchWorkingMonths() {
    return function (dispatch) {
        axios.get(api.apiGetWorkingMonth).then(
            (response) => {
                dispatch({
                    type: Types.FETCH_WORKINGMONTHS,
                    serverData: response.data

                })
            }).catch((err) => {
            console.log(err)


        })
    }


}

export function fetchDepartments() {
    return function (dispatch) {
        axios.get(api.apiGetDepartment).then(
            (response) => {
                dispatch({
                    type: Types.FETCH_DEPARTMENTS,
                    serverData: response.data

                })
            }).catch((err) => {
            console.log(err)
        })
    }
}

export function fetchSalaryEmployer(typeEmployer, workingMonth) {
    return function (dispatch) {
        axios.get(api.apiGetSalaryEmployers(typeEmployer, workingMonth)).then(
            (response) => {
                dispatch({
                    type: Types.FETCH_SALARY_EMPLOYER,
                    serverData: response.data

                })
            }).catch((err) => {
            console.log(err)
        })
    }
}


export function fetchMaxSalary(workingMonth) {
    return function (dispatch) {
        axios.get(api.getMaxSalary(workingMonth)).then(
            (response) => {
                dispatch({
                    type: Types.FETCH_MAX_SALARY,
                    serverData: response.data

                })
            }).catch((err) => {
            console.log(err)
        })
    }
}

