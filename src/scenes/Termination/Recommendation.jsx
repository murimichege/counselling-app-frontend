import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  IconButton,
  TextField,
  MenuItem,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
const Recommendation = () => {
  const [selectedListItem, setSelectedListItem] = useState(-1);
  const [recommendation, setRecommendation] = useState("");
  const [checked, setChecked] = useState([]);
  const [listItems, setListItems] = useState([]);

  const handleListItemChange = (event) => {
    setSelectedListItem(event.target.value);
  };

  const handleRecommendationChange = (event) => {
    setRecommendation(event.target.value);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAddRecommendation = () => {
    if (recommendation.trim() !== "") {
      const newListItems = [...listItems, recommendation];
      setListItems(newListItems);
      setRecommendation("");
    }
  };

  const handleDeleteItem = (index) => {
    const newListItems = listItems.filter((item, i) => i !== index);
    setListItems(newListItems);
  };

  const handleEditItem = (index) => {
    setSelectedListItem(index);
    setRecommendation(listItems[index]);
  };

  const handleUpdateItem = () => {
    if (selectedListItem !== -1 && recommendation.trim() !== "") {
      const newListItems = [...listItems];
      newListItems[selectedListItem] = recommendation;
      setListItems(newListItems);
      setSelectedListItem(-1);
      setRecommendation("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        id="outlined-select-list"
        select
        label="Select List Item"
        value={selectedListItem}
        onChange={handleListItemChange}
        sx={{ width: "240px", marginBottom: "10px" }}
        helperText="Select an item from the list"
      >
        {listItems.map((item, index) => (
          <MenuItem key={index} value={index}>
            {item}
          </MenuItem>
        ))}
      </TextField>

      {selectedListItem !== -1 && (
        <TextField
          id="outlined-recommendation"
          label="Recommendation"
          value={recommendation}
          onChange={handleRecommendationChange}
          sx={{ width: "240px", marginBottom: "10px" }}
          placeholder="Add a recommendation"
        />
      )}

      <div>
        <IconButton
          color="primary"
          onClick={handleAddRecommendation}
          disabled={selectedListItem !== -1}
        >
          <AddIcon />
        </IconButton>
        <IconButton
          color="primary"
          onClick={handleUpdateItem}
          disabled={selectedListItem === -1 || recommendation.trim() === ""}
        >
          <EditIcon />
        </IconButton>
      </div>

      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {listItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleEditItem(index)}>
              <ListItemText primary={item} />
            </ListItemButton>
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Recommendation;
