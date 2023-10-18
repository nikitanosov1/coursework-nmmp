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
import React, { useState } from "react";
import { useDispatch } from "react-redux";

interface IdefaultValues {
  I: number;
  K: number;
  k: number;
  schemaName: ESchemaName;
}

const defaultValues: IdefaultValues = {
  I: 100,
  K: 100,
  k: 100,
  schemaName: ESchemaName.KRANK_NICHOLSON,
};

export const GraphSettings = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const dispatch = useDispatch();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: Number(value),
    });
  };

  const handleCalculateButtonClick = () => {
    dispatch(graphSettingsActions.setSchemaName(formValues.schemaName));
    dispatch(graphSettingsActions.setBigK(formValues.K));
    dispatch(graphSettingsActions.setK(formValues.k));
    dispatch(graphSettingsActions.setI(formValues.I));
  };

  return (
    <Stack sx={{ maxWidth: 400 }} flexDirection="column">
      <FormControl component="fieldset" sx={{ gap: "10px" }}>
        <TextField
          name="I"
          type="number"
          label="Значение I"
          fullWidth
          value={formValues.I}
          onChange={handleInputChange}
        />
        <TextField
          name="K"
          type="number"
          label="Значение K"
          fullWidth
          value={formValues.K}
          onChange={handleInputChange}
        />
        <TextField
          name="k"
          type="number"
          label="Номер временного слоя"
          fullWidth
          value={formValues.k}
          onChange={handleInputChange}
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
        variant="contained"
        color="primary"
        onClick={handleCalculateButtonClick}
      >
        Рассчитать
      </Button>
    </Stack>

    // <section className="">
    //   <Button variant="contained" color="primary">
    //     Primary Button
    //   </Button>
    //   <Button variant="contained" color="secondary">
    //     Secondary Button
    //   </Button>
    // </section>
  );
};
