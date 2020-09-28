import React from "react";

export const DisplayFieldSingles = props => {
  const { fieldName, label } = props;

  return (
    <>
      <div className="p-col-12 p-md-7 p-lg-7">
        <label
          style={{
            color: "#504a4a",
            float: "left",
            marginBottom: "-1rem"
          }}
          htmlFor={fieldName}
        >
          {label}
        </label>
      </div>
      <div
        className="p-col-12 p-md-3 p-lg-3"
        style={{
          fontWeight: "bold",
          marginBottom: "-1rem"
        }}
      >
        {fieldName}
      </div>
    </>
  );
};
