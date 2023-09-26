import React, { ChangeEvent, FormEvent, useState } from "react";
import { searchQuery } from "../../../prisma/announceQuery";

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value);
  };
  const onSubmitSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ist");
    searchQuery(value);
  };

  return { value, setValue, onChange, onSubmitSearch };
};

export default useInput;
