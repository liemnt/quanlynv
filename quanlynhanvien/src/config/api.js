export const apiGetEmployers = (departmentID) => `employers/filter_department/${departmentID}`

export const apiGetDepartment = 'departments/';

export const apiGetWorkingMonth = "working_month/";

export const apiPostFulltimeEmployer = "employers/full_time_employer/";

export const apiPostParttimeEmployer = "employers/part_time_employer/";

export const apiDeleteEmployer = (employerID) => `employers/${employerID}/`