import React from "react";

function Button({ data }) {
  return <button className=" onlybtn w-40 text-lg px-8 py-0 rounded-lg hover:scale-105 transition-all duration-150 ease-linear">{data}</button>;
}

export default Button;