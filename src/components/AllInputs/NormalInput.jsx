import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";
const NormalInput = () => {
  return (
    <div className="md:grid md:grid-cols-3 gap-y-6 md:gap-y-14 md:gap-x-32">
      <div className="space-y-4">
        <InputInformation info="<Input />" />
        <InputType
          inputTypeStyle={inputStyle.Default}
          labelColor="text-gray-800"
        />
      </div>
      <div className="space-y-4">
        <InputInformation info="&:hover" />
        <InputType
          inputTypeStyle={inputStyle.DefaultHover}
          labelColor="text-black"
        />
      </div>
      <div className="space-y-4">
        <InputInformation info="&:focus" />
        <InputType
          inputTypeStyle={inputStyle.DefaultHoverFocus}
          labelColor="text-blue-500"
        />
      </div>
    </div>
  );
};

export default NormalInput;
