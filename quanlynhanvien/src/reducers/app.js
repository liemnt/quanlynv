import * as Actions from '../constants/App';

const initialState = {
    employers: {},
    departments: [],
    workingMonths: [],
    employersManagement: {},
    salaryEmployers: {},
    maxSalary: {}

}

export default function app(state = initialState, action) {

    switch (action.type) {
        case Actions.FETCH_EMPLOYERS:
            return Object.assign({}, state, {
                employers: action.serverData
            })
        case Actions.FETCH_DEPARTMENTS:
            return Object.assign({}, state, {
                departments: action.serverData
            })
        case Actions.FETCH_WORKINGMONTHS:
            return Object.assign({}, state, {
                workingMonths: action.serverData
            })
        case Actions.FETCH_DEPARTMENTS_MANAGEMENT:
            return Object.assign({}, state, {
                employersManagement: action.serverData
            })
        case Actions.FETCH_SALARY_EMPLOYER:
            return Object.assign({}, state, {
                salaryEmployers: action.serverData
            })
        case Actions.FETCH_MAX_SALARY:
            return Object.assign({}, state, {
                maxSalary: action.serverData
            })
        default:
            return state
    }
}