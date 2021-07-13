import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";

const InputWithIcon = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-x-32 md:gap-y-12">
      <div className="space-y-4">
        <InputInformation info="<Input startIcon />" />
        <InputType
          inputTypeStyle={inputStyle.LogoStart}
          labelColor="text-gray-800"
          iconStart={true}
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-4">
          <InputInformation info="<Input endIcon />" />
          <InputType
            inputTypeStyle={inputStyle.LogoEnd}
            labelColor="text-gray-800"
            iconEnd={true}
          />
        </div>
      </div>
    </div>
  );
};

export default InputWithIcon;
