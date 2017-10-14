import axios from '../config/axios'
import * as api from '../config/api'
import * as Actions from '../actions/App'


export const postFulltimeEmployer = (objectData, callback) => {
    axios.post(api.apiPostFulltimeEmployer, JSON.stringify(objectData)).then((response) => {
        if (response.data.errors === null) {
            callback();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const postParttimeEmployer = (objectData, callback) => {
    axios.post(api.apiPostParttimeEmployer, JSON.stringify(objectData)).then((response) => {
        if (response.data.errors === null) {
            callback();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const deleteEmployer = (employerID, callback) => {
    axios.delete(api.apiDeleteEmployer(employerID)).then((response) => {
        if (response.status == 204) {
            callback();
        }
    }).catch((err) => {
        console.log(err)
    })
}