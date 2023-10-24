import { selectInaccuracy } from "@/redux/features/graphResult/selector";
import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const InaccuracyOutput = () => {
  const inaccuracy = useSelector(selectInaccuracy);

  const beautifulInaccuracy = inaccuracy.toFixed(4);
  return (
    <Typography
      sx={(theme) => ({
        color: theme.palette.text.primary,
      })}
    >
      Погрешность: {beautifulInaccuracy}
    </Typography>
  );
};
