import { selectInaccuracy } from "@/redux/features/graphResult/selector";
import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const InaccuracyOutput = () => {
  const inaccuracy = useSelector(selectInaccuracy);

  let beautifulInaccuracy = inaccuracy.toFixed(4);
  if (isNaN(beautifulInaccuracy)){
    beautifulInaccuracy = "Схема неустойчива"
  }
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
