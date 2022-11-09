import React, { useState } from "react";
import { Input } from "../../stylesJs/home";

const SearchBar = ({ search, onChange }) => {
  
  return (
    <div className="text-center">
      <Input
        search={search}
        onChange={onChange}
        className="me-3"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
