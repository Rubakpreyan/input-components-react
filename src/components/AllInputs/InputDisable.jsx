import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";

const InputDisable = () => {
  return (
    <div className="md:grid md:grid-cols-3 gap-x-32">
      <div className="space-y-4">
        <InputInformation info="<Input disabled />" />
        <InputType
          isDisabled={true}
          inputTypeStyle={inputStyle.DisableInput}
          labelColor="text-gray-800"
        />
      </div>
    </div>
  );
};

export default InputDisable;
