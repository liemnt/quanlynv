export const apiGetEmployers = (departmentID) => `employers/filter_department/${departmentID}`

export const apiGetDepartment = 'departments/';

export const apiGetWorkingMonth = "working_month/";

export const apiPostFulltimeEmployer = "employers/full_time_employer/";

export const apiPostParttimeEmployer = "employers/part_time_employer/";

export const apiDeleteEmployer = (employerID) => `employers/${employerID}/`


export const apiPutFulltimeEmployer = (employerID) => `employers/full_time_employer/${employerID}`;


export const apiPutPartimetimeEmployer = (employerID) => `employers/part_time_employer/${employerID}`;

export const apiGetSalaryEmployers = (employerType, wokingMonth) => `employers/filter_employer_type/?employer_type=${employerType}&working_month_id=${wokingMonth}`

export const postCalcParttimeSalry = `part_time_salary/`;

export const postCalcFulltimeSalry = `full_time_salary/`;

export const getMaxSalary = (workingMonthID) => `employers/max_salary/${workingMonthID}`;


