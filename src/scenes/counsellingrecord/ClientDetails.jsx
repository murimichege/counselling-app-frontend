import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, TextField, Button } from "@mui/material";
import { CounsellingRecordContext } from "./CounselingRecord";

const ClientDetails = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(CounsellingRecordContext);
  const { ClientCode, ClientInitials, currentDate } = formData;
  console.log(formData)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  console.log("formdata", formData);

  return (
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}
    >
      <h2>Client Details</h2>

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
            id="outlined-select-currency"
            label="Client Code"
            name="ClientCode"
            value={ClientCode}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              // gridColumn: "span 4",
            }}
          />
          <TextField
            label="Client Initials"
            name="ClientInitials"
            value={ClientInitials}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              // gridColumn: "span 4",
            }}
          />
          <TextField
            label="Date"
            name="currentDate"
            value={currentDate}
            inputProps={{
              style: { height: "auto" },
            }}
            disabled
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              // gridColumn: "span 4",
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
          onClick={() => onButtonClick("pagetwo")}
        >
          Save Client Details.
        </Button>
      </Box>
    </main>
  );
};

export default ClientDetails;
