import React, { useEffect, useState } from "react";

function Input({ label, type = "text", ...props }) {
  const [show, setShow] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (show) {
      setInputType("text");
    } else if (type === "password") {
      setInputType("password");
    }
  }, [show]);

  console.log(show);

  const handleFun = (e) => {
    e.preventDefault();
    setShow((show) => !show);
  };

  return (
    <label className="block relative">
      <input
        className="bg-zinc-50 border w-full h-[38px] rounded-sm focus:border-gray-500 px-2 text-sm outline-none peer text-sm valid:pt-3"
        required={true}
        type={inputType}
        {...props}
      />
      <small className="absolute top-1/2 cursor-text left-[9px] pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {type === "password" && props?.value && (
        <button
          onClick={handleFun}
          className="absolute top-0 right-0 h-full flex items-center text-sm font-semibold pr-2 "
        >
          {show ? "Hide" : "Show"}
        </button>
      )}
    </label>
  );
}

export default Input;
