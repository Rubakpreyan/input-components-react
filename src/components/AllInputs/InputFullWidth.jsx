import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";

const InputFullWidth = () => {
  return (
    <div className="space-y-4">
      <InputInformation info="<Input fullWidth />" />
      <InputType
        inputTypeStyle={inputStyle.InputSm}
        labelColor="text-gray-800"
        inputValue="Text"
      />
    </div>
  );
};

export default InputFullWidth;
