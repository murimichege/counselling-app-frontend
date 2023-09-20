import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {
  Box,
  TextField,
  MenuItem,
  Button,
  List,
  Demo,
  ListItem,
  ListItemText,
} from "@mui/material";
import { CounsellingRecordContext } from "./OngoingCounselingRecord";

const CounsellorSignature = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log("formdata", formData);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Counselor Signature</h2>

      <div
        className="center ph4 selectionDiv"
        style={{ height: "46%", display: "inline-block" }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // justifyContent: space-evenly
          }}
        >
          <TextField
            label="Counselor Name"
            name="CounsellorName"
            value={formData.CounsellorName}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
          <TextField
            id="date"
            name="CurrentDate"
            label="CurrentDate"
            type="date"
            value={formData.CurrentDate}
            onChange={handleInputChange}
            // defaultValue=now()
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // justifyContent: space-evenly
          }}
        >
          <TextField
            label="Signature"
            variant="standard"
            name="CounsellorSignature"
            value={formData.CounsellorSignature}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              height: "auto",
              gridColumn: "span 4",
              marginTop: "30px",
            }}
          />
        </Box>
      </div>
      <Box
        sx={{
          marginTop: "40px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pagetwo")}
        >
          Cancel
        </Button>

        <Button
          className="f6 grow br2 ph3 pv2 mb2 dib white"
          type="submit"
          variant="contained"
          onClick={() => onButtonClick("pageone")}
        >
          Save Counselor Details and Close Session.
        </Button>
      </Box>
    </main>
  );
};

export default CounsellorSignature;
