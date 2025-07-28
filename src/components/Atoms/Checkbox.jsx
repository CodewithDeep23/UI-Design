import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import { SvgIcon } from "@mui/material";

function CustomCheckIcon() {
  return (
    <SvgIcon viewBox="0 0 18 18" sx={{ fontSize: 18 }}>
      <rect width="18" height="18" rx="3" fill="#027056" />
      <path
        d="M5 9L8 12L13 6"
        stroke="#FFFFFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
}

function CustomUncheckIcon() {
  return (
    <SvgIcon viewBox="0 0 18 18" sx={{ fontSize: 18 }}>
      <rect
        width="18"
        height="18"
        rx="3"
        fill="transparent"
        stroke="#CDD1D0"
        strokeWidth="1.5"
      />
    </SvgIcon>
  );
}

// ✅ Controlled component version
export default function CustomCheckbox({ checked, onChange }) {
  return (
    <Checkbox
      checked={checked}
      onChange={onChange}
      icon={<CustomUncheckIcon />}
      checkedIcon={<CustomCheckIcon />}
      sx={{ padding: 0 }}
    />
  );
}
