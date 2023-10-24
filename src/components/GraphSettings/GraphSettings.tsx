import { graphSettingsActions } from "@/redux/features/graphSettings";
import { ESchemaName } from "@/types/graph";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface IdefaultValues {
  I: number;
  K: number;
  k: number;
  schemaName: ESchemaName;
}

const defaultValues: IdefaultValues = {
  I: 25,
  K: 5000,
  k: 5000,
  schemaName: ESchemaName.KRANK_NICHOLSON,
};

export const GraphSettings = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useDispatch();
  const handleCalculateButtonClick = () => {
    dispatch(graphSettingsActions.setSchemaName(formValues.schemaName));
    dispatch(graphSettingsActions.setBigK(formValues.K));
    dispatch(graphSettingsActions.setK(formValues.k));
    dispatch(graphSettingsActions.setI(formValues.I));
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Enter") {
      handleCalculateButtonClick();
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: Number(value),
    });
  };

  const hasError =
    formValues.I < 1 ||
    formValues.K < 1 ||
    formValues.k < 0 ||
    formValues.k > formValues.K;

  return (
    <Stack
      sx={{ maxWidth: 400 }}
      flexDirection="column"
      onKeyDown={handleKeyDown}
    >
      <FormControl component="fieldset" sx={{ gap: "10px" }}>
        <TextField
          name="I"
          type="number"
          label="Значение I"
          fullWidth
          value={formValues.I == 0 ? "" : formValues.I}
          onChange={handleInputChange}
          InputProps={{
            inputProps: { min: 0 },
          }}
          error={formValues.I < 1}
        />
        <TextField
          name="K"
          type="number"
          label="Значение K"
          fullWidth
          value={formValues.K == 0 ? "" : formValues.K}
          onChange={handleInputChange}
          InputProps={{
            inputProps: { min: 0 },
          }}
          error={formValues.K < 1}
        />
        <TextField
          name="k"
          type="number"
          label="Номер временного слоя"
          fullWidth
          value={formValues.k == 0 ? "" : formValues.k}
          onChange={handleInputChange}
          InputProps={{
            inputProps: { min: 0 },
          }}
          error={formValues.k < 0 || formValues.k > formValues.K}
        />
        <FormLabel>Тип схемы</FormLabel>
        <RadioGroup
          name="schemaName"
          value={formValues.schemaName}
          onChange={handleInputChange}
        >
          <FormControlLabel
            key="EXPLICIT"
            value={ESchemaName.EXPLICIT}
            control={<Radio size="small" />}
            label={
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                })}
              >
                Явная схема
              </Typography>
            }
          />
          <FormControlLabel
            key="IMPLICIT"
            value={ESchemaName.IMPLICIT}
            control={<Radio size="small" />}
            label={
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                })}
              >
                Неявная схема
              </Typography>
            }
          />
          <FormControlLabel
            key="KRANK_NICHOLSON"
            value={ESchemaName.KRANK_NICHOLSON}
            control={<Radio size="small" />}
            label={
              <Typography
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                })}
              >
                Схема Кранка-Николсона
              </Typography>
            }
          />
        </RadioGroup>
      </FormControl>

      <Button
        sx={{
          marginTop: 2,
        }}
        variant="contained"
        color="primary"
        onClick={handleCalculateButtonClick}
        disabled={hasError}
      >
        Рассчитать
      </Button>
    </Stack>
  );
};
