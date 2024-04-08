import React, { useState } from "react";
const FormInput = (props) => {
  const { errorMessage, name, type, placeholder, onChange } = props;
  return (
    <div id="forminput">
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
       
      />
        {errorMessage && <span className="errorMessage">{errorMessage}</span>}
    </div>
  );
};

export default FormInput;
