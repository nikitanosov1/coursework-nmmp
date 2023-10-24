import { selectWorkTime } from "@/redux/features/graphResult/selector";
import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const WorkTimeOutput = () => {
  const workTime = useSelector(selectWorkTime);

  const beautifulWorkTime = workTime.toFixed(4);
  return (
    <Typography
      sx={(theme) => ({
        color: theme.palette.text.primary,
      })}
    >
      Время вычислений: {beautifulWorkTime} мс
    </Typography>
  );
};
