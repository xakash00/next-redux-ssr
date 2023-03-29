import React, { useState } from "react";
import { Input, InputBox } from "../../stylesJs/home";
import { RiSearch2Fill } from "react-icons/ri";
import { useRef } from "react";
const SearchBar = ({ search, onChange }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <InputBox
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onFocus={() => setIsHover(true)}
      onFocusCapture={() => setIsHover(true)}
      className="text-center"
      hover={isHover}
    >
      <Input
        search={search}
        onChange={onChange}
        className="me-3"
        placeholder="Search..."
      />
      <RiSearch2Fill
        style={{
          color: `${isHover === true ? "#28d" : "#ccc"}`,
          transition: "color 0.5s ease",
        }}
      />
    </InputBox>
  );
};

export default SearchBar;
