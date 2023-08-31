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
import {TerminationContext} from './Termination'

const ClientDetails = ({ onButtonClick }) => {
  const { formData, setFormData } = useContext(TerminationContext);

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
            label="ClientName"
            name="ClientName"
            value={formData.ClientName}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{ marginRight: "20px", width: "240px", height: "auto", gridColumn: "span 2" }}
          />
          <TextField
            id="outlined-select-currency"
            label="StudentID"
            name="StudentID"
            value={formData.StudentID}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{ marginRight: "20px", width: "240px", height: "auto",gridColumn: "span 2" }}
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
            id="outlined-select-currency"
            label="Sessions Held"
            name="Sessions Held"
            value={formData.SessionsHeld}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{ marginRight: "20px", width: "240px", height: "auto",gridColumn: "span 2",marginTop:"30px" }}
          />
{/* 
          <Demo>
            <List dense={dense}>
              <ListItem>
                <ListItemText
                  primary="Single-line item"
                  secondary={secondary ? "Secondary text" : null}
                />
              </ListItem>
            </List>
          </Demo> */}
        </Box>
        {/* <p style={{ color: "#C0C0C0" }}>Delivery Dates.</p> */}
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
            value={formData.dateFrom}
            onChange={handleInputChange}
            // defaultValue=now()
            sx={{ marginRight: "20px", width: "240px", height: "auto",gridColumn: "span 2" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="date"
            name="dateTo"
            label="To"
            type="date"
            value={formData.dateTo}
            onChange={handleInputChange}
            sx={{ marginRight: "20px", width: "240px", height: "auto",gridColumn: "span 2" }}
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
            id="outlined-select-currency"
            label="Counseling Goals Set"
            name="price"
            value={formData.GoalsSet}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{ marginRight: "20px", width: "240px", height: "auto" }}
          />

        </Box>
      </div>
<Box 
sx={{marginTop:"40px", justifyContent:"space-between", display:"flex"}}
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
