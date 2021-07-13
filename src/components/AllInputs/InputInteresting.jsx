import React from "react";
import InputInformation from "../DisplayType";
import InputType from "../GetInput";
import inputStyle from "../InputTypeStyle";

const InputInteresting = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-x-32 gap-y-8 md:gap-y-12 ">
      <div className="space-y-4">
        <InputInformation info="<Input helperText=”Some interesting text” />" />
        <InputType
          inputTypeStyle={inputStyle.InterestingText}
          labelColor="text-gray-800"
          bottomText={true}
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-4">
          <InputInformation info="<Input helperText=”Some interesting text” error />" />
          <InputType
            inputTypeStyle={inputStyle.InterestingTextError}
            labelColor="text-red-400"
            bottomText={true}
          />
        </div>
      </div>
    </div>
  );
};

export default InputInteresting;
