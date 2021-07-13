import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";
const InputError = () => {
  return (
    <div className="md:grid md:grid-cols-3 gap-y-6 md:gap-y-14 md:gap-x-32">
      <div className="space-y-4">
        <InputInformation info="<Input error />" />
        <InputType
          inputTypeStyle={inputStyle.Error}
          labelColor="text-red-400"
        />
      </div>
      <div className="space-y-4">
        <InputInformation info="&:hover" />
        <InputType
          inputTypeStyle={inputStyle.ErrorHover}
          labelColor="text-black"
        />
      </div>
      <div className="space-y-4">
        <InputInformation info="&:focus" />
        <InputType
          inputTypeStyle={inputStyle.ErrorHoverFocus}
          labelColor="text-red-400"
        />
      </div>
    </div>
  );
};

export default InputError;
