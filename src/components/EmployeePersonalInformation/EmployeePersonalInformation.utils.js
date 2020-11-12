export const errorMsg = (error, touched, key) =>
  error[key] && touched[key] && error[key];

export const permAddressCopy = ({values}) => {
  if (values.checkedPermAddress) {
    const newValues = {
      ...values,
      addrPermDoorNo: values.addrDoorNo,
      addrPermLine1: values.addrLine1,
      addrPermLine2: values.addrLine2,
      addrPermCityMandal: values.addrCityMandal,
      addrPermState: values.addrState,
      addrPermPincode: values.addrPincode,
    };
    values = { ...newValues };
  }
  return {...values}
};
