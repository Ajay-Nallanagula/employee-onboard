export const errorMsg = (error, touched, key) =>
error[key] && touched[key] && error[key];