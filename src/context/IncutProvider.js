import React, { useState } from "react";
import { Provider } from "./IncutContext";
import { uuid } from "uuidv4";

export const IncutProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  return (
    <Provider
      value={{
        formData: {
          ...formData,
          empcustomId: uuid(),
          approvedStatus: "pending",
        },
      }}
    >
      {" "}
      {children}
    </Provider>
  );
};

export default IncutProvider;
