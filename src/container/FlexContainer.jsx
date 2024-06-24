import React from "react";

export default function FlexContainer({ children }) {
  return (
    <div className="flex justify-start items-center w-full h-screen">
      {children}
    </div>
  );
}
