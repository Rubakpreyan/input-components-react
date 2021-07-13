import React from "react";

const TextBox4 = (props) => {
  const { row, inputStyle } = props;
  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-800">Label</div>
      <textarea
        className={inputStyle}
        rows={row}
        placeholder="Placeholder"
      ></textarea>
    </div>
  );
};

export default TextBox4;
