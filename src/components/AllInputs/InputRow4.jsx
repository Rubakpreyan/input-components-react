import React from "react";
import TextBox4 from "../TextBox4";
import InputTypeStyle from "../InputTypeStyle";
import InputInformation from "../DisplayType";

const InputRow4 = () => {
  return (
    <div className="md:grid md:grid-cols-3 gap-y-8 md:gap-y-12 md:gap-x-32">
      <div className="space-y-4">
        <InputInformation info="<Input multiline row=”4” /> " />
        <TextBox4 row={4} inputStyle={InputTypeStyle.Default} />
      </div>
    </div>
  );
};

export default InputRow4;
