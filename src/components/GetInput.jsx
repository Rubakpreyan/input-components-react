import React, { useState } from "react";
import Phone from "./Icons/phone.svg";
import Lock from "./Icons/lock.svg";

const GetInput = (props) => {
  const {
    bottomText,
    inputTypeStyle,
    inputType,
    inputName,
    inputValue,
    iconStart,
    iconEnd,
    labelColor,
    isDisabled,
  } = props;
  const [value, setInputValue] = useState(inputValue ? inputValue : "");
  return (
    /* Main part */
    <div className="space-y-1">
      <span className={`text-sm ${labelColor}`}>Label</span>
      <div className="relative flex items-center gap-4">
        {/* Image adding */}
        {iconStart ? (
          <img src={Phone} className="absolute w-4 h-4 left-1" />
        ) : null}
        <input
          className={inputTypeStyle}
          name={inputName}
          type={inputType}
          placeholder="Placeholder"
          value={value}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isDisabled}
        />
        {iconEnd ? (
          <img src={Lock} className="absolute w-4 h-4 right-2" />
        ) : null}
      </div>
      {/* text bottom */}
      {bottomText ? (
        <span className={`text-sm ${labelColor}`}>Some interesting text</span>
      ) : null}
    </div>
  );
};

export default GetInput;
