import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderSearch = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <TextField
      variant="outlined"
      size="small"
      fullWidth
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default HeaderSearch;
