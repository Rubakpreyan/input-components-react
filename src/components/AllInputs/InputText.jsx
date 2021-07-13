import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";
const InputText = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-x-32 md:gap-y-12">
      <div className="space-y-4">
        <InputInformation info="<Input value=”text” />" />
        <InputType
          inputTypeStyle={inputStyle.Default}
          labelColor="text-gray-800"
          inputValue="Text"
        />
      </div>
    </div>
  );
};

export default InputText;
