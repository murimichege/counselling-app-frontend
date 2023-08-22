import React, { useState, useContext } from "react";
import "./index.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box, TextField, MenuItem, Button } from "@mui/material";
import { ProductContext } from "../ProductOnBoarding/Product";

const CounsellorSignature = ({ onButtonClick }) => {
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
            {/* <h2>Let's get further details of your product</h2>
            <p style={{ color: "#C0C0C0" }}>We'll streamline your marketing experience accordingly.</p> */}
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
                        label="Quantity"
                        name="quantity"
                        value={formData.quantity}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="Product Quantity"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    />

<TextField
                        label="Quantity"
                        name="quantity"
                        value={formData.quantity}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="Product Quantity"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    />
                </Box>
                <TextField
                        label="Quantity"
                        name="quantity"
                        value={formData.quantity}
                        inputProps={{
                            style: { height: "auto" }
                        }}
                        onChange={handleInputChange}
                        helperText="Product Quantity"
                        sx={{ marginRight: "20px", width: "240px", height: "auto" }}
                    />
            
            
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

export default CounsellorSignature;