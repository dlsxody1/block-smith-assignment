import React from "react";
import { LoadingUI } from "../Icon";

const Loading = () => {
  return (
    <div className="p-dataLoading flex justify-center items-center gap-2">
      <LoadingUI />
    </div>
  );
};

export default Loading;
