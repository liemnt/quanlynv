import axios from "../config/axios";
import * as api from "../config/api";


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

export const putFullTimeEmployer = (employerID, objectData, callback) => {
    axios.put(api.apiPutFulltimeEmployer(employerID), JSON.stringify(objectData)).then((response) => {
        if (response.status == 200 && response.data.errors === null) {
            callback();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const putParttimeEmployer = (employerID, objectData, callback) => {
    axios.put(api.apiPutPartimetimeEmployer(employerID), JSON.stringify(objectData)).then((response) => {
        if (response.status == 200 && response.data.errors === null) {
            callback();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const postCalcParttimeSalary = (objectData, callback) => {
    axios.post(api.postCalcParttimeSalry, JSON.stringify(objectData)).then((response) => {
        if (response.data.errors === null) {
            callback();
        }
    }).catch((err) => {
        console.log(err)
    })
}

export const postCalcFulltimeSalary = (objectData, callback) => {
    axios.post(api.postCalcFulltimeSalry, JSON.stringify(objectData)).then((response) => {
        if (response.data.errors === null) {
            callback();
        }
    }).catch((err) => {
        console.log(err)
    })
}
