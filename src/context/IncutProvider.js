import React, { useEffect, useState } from "react";
import { Provider } from "./IncutContext";

export const IncutProvider = ({children}) => {
  const [formData, setFormData] = useState({});
//   useEffect(() => {
//     setFormData(() => ({ ...formData }));
//   }, []);

return <Provider value={{ formData: { ...formData } }}> {children}</Provider>
};

export default IncutProvider