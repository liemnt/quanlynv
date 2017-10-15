export function numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
};

export const parseBirthdayForServer = (string) => {
    let arr = string.split('/');
    let newDate = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        newDate += "-" + arr[i];
    }
    newDate = newDate.substr(1);
    return newDate
}

export const parseBirthdayForClient = (string) => {
    let arr = string.split('-');
    let newDate = "";
    for (let i = arr.length - 1; i >= 0; i--) {
        newDate += "/" + arr[i];
    }
    newDate = newDate.substr(1);
    return newDate
}