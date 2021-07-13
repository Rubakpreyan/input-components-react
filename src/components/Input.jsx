import React from "react";
import InputDisabled from "./AllInputs/InputDisable";
import InputError from "./AllInputs/InputError";
import InputFullWidth from "./AllInputs/InputFullWidth";
import InputInteresting from "./AllInputs/InputInteresting";
import InputMultiSize from "./AllInputs/InputMultiSize";
import InputRow4 from "./AllInputs/InputRow4";
import InputText from "./AllInputs/InputText";
import InputWithIcon from "./AllInputs/InputWithIcon";
import NormalInput from "./AllInputs/NormalInput";

const Input = () => {
  return (
    <div className="space-y-4">
      <NormalInput />
      <InputError />
      <InputDisabled />
      <InputInteresting />
      <InputWithIcon />
      <InputText />
      <InputMultiSize />
      <InputFullWidth />
      <InputRow4 />
    </div>
  );
};

export default Input;
