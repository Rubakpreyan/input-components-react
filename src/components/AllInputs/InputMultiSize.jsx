import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";

const InputMultiSize = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-x-32 md:gap-y-12">
      <div className="space-y-4">
        <InputInformation info="<Input size=”sm” />" />
        <InputType
          inputTypeStyle={inputStyle.InputSm}
          labelColor="text-gray-800"
        />
      </div>
      <div className="space-y-4">
        <InputInformation info="<Input size=”md” />" />
        <InputType
          inputTypeStyle={inputStyle.Inputmd}
          labelColor="text-gray-800"
        />
      </div>
    </div>
  );
};

export default InputMultiSize;
