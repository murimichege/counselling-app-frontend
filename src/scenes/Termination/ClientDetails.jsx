import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, TextField, MenuItem, Button, List, Demo,ListItem,ListItemText } from "@mui/material";
import { ProductContext } from "../ProductOnBoarding/Product";

const currencies = [{ name: "KSHS" }, { name: "EURO" }, { name: "USD" }];
const metrics = [{ name: "KGS" }, { name: "TONNES" }];

const ClientDetails = ({ onButtonClick }) => {
    const { formData, setFormData } = useContext(ProductContext);

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
        color: theme.palette.text.secondary
    }));

    return (
        <main className="pt5 black-80" style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto" }}>
            <h2>Let's get further details of your product</h2>
            <p style={{ color: "#C0C0C0" }}>We'll streamline your marketing experience accordingly.</p>
            <div className="center ph4 selectionDiv" style={{ height: "46%", display: "inline-block" }}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        // justifyContent: space-evenly
                    }}
                >
                    <TextField
                        id="outlined-select-currency"
                        label="ClientName"
                        name="ClientName"
                        value={formData.ClientName}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="ClientName"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    />
    <TextField
                        id="outlined-select-currency"
                        label="StudentID"
                        name="StudentID"
                        value={formData.StudentID}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="StudentID"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        // justifyContent: space-evenly
                    }}
                >
                    <TextField
                        id="outlined-select-currency"
                        label="Sessions Held"
                        name="Sessions Held"
                        value={formData.SessionsHeld}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="SessionsHeld"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    />
    {/* <TextField
                        id="outlined-select-currency"
                        label="StudentID"
                        name="StudentID"
                        value={formData.StudentID}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="StudentID"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    /> */}

<Demo>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
                </Box>
                <p style={{ color: "#C0C0C0" }}>Delivery Dates.</p>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginTop: "50px",
                        marginBottom: "50px"
                    }}
                    inputProps={{
                        style: { display: "flex" }
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
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                    <TextField
                        id="date"
                        name="dateTo"
                        label="To"
                        type="date"
                        value={formData.dateTo}
                        onChange={handleInputChange}
                        sx={{ width: 220 }}
                        InputLabelProps={{
                            shrink: true
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        // justifyContent: space-evenly
                    }}
                >
                    <TextField
                        id="outlined-select-currency"
                        label="Price"
                        name="price"
                        value={formData.price}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="Price"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    />

                    <TextField
                        id="outlined-select-currency"
                        select
                        name="currency"
                        label="Currency"
                        value={formData.currency}
                        onChange={handleInputChange}
                        sx={{ width: "240px" }}
                        helperText="Currency"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.name} value={option.name}>
                                {option.name}
                            </MenuItem>
                        ))}
                    </TextField>
                </Box>
            </div>

            <Button
                className="f6 grow br2 ph3 pv2 mb2 dib white"
                style={{ borderStyle: "none", width: "100%", backgroundColor: "#664DE5" }}
                type="submit"
                variant="contained"
                onClick={() => onButtonClick("pagefour")}
            >
                Save Product Details
            </Button>
        </main>
    );
};

export default ClientDetails;