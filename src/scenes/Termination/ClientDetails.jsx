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
import { TerminationContext } from "./Termination";

const ClientDetails = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(TerminationContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Destructuring formData for better readability
  const { ClientName, StudentID, SessionsHeld, dateFrom, dateTo } = formData;

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
            label="ClientName"
            name="ClientName"
            value={ClientName}
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
            label="StudentID"
            name="StudentID"
            value={StudentID}
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
            select
            label="Sessions Held"
            name="SessionsHeld"
            value={SessionsHeld}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
              marginTop: "30px",
            }}
          >
            <MenuItem value=""></MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
          </TextField>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          inputProps={{
            style: { display: "flex" },
          }}
        >
          <TextField
            id="date"
            name="dateFrom"
            label="From"
            type="date"
            value={dateFrom}
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
          <TextField
            id="date"
            name="dateTo"
            label="To"
            type="date"
            value={dateTo}
            onChange={handleInputChange}
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
