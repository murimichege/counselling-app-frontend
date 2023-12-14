import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import { useDropzone } from "react-dropzone";

const FolderAccordion = ({ folders }) => {
  const [files, setFiles] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [sessionDocuments, setSessionDocuments] = useState([]);

  const handleFileDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const handleDocumentAddition = () => {
    if (selectedDocument) {
      setSessionDocuments([...sessionDocuments, selectedDocument]);
      setSelectedDocument(""); // Clear selected document after adding
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleFileDrop,
  });

  return (
    <Box>
      {folders.map((folder, index) => (
        <Accordion key={index} variant="outlined" sx={{ borderRadius: "10px" }}>
          <AccordionSummary>
            <Box display="flex" alignItems="center">
              <Avatar sx={{ bgcolor: "#2196F3", color: "#fff" }}>
                <FolderOpenTwoToneIcon />
              </Avatar>
              <Box ml={2}>
                <Typography variant="h6">{folder.title}</Typography>
                {folder.links && (
                  <Typography variant="subtitle2">
                    {folder.links.length} Links
                  </Typography>
                )}
              </Box>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box width="100%">
              <Typography variant="subtitle1">Links:</Typography>
              <List>
                {folder.links &&
                  folder.links.map((link, linkIndex) => (
                    <ListItem key={linkIndex}>
                      <InsertLinkIcon />
                      <ListItemText primary={link.label} />
                    </ListItem>
                  ))}
              </List>
              <Box
                {...getRootProps()}
                sx={{
                  border: "1px dashed #000",
                  borderRadius: "12px",
                  textAlign: "center",
                  p: 2,
                  mt: 2,
                }}
              >
                <input {...getInputProps()} />
                <CloudUploadTwoToneIcon />
                <Typography>Drag & drop files here</Typography>
              </Box>
              {files.length > 0 && (
                <Box mt={2}>
                  <Typography variant="subtitle1">Uploaded Files:</Typography>
                  <List>
                    {files.map((file, fileIndex) => (
                      <ListItem key={fileIndex}>
                        <ListItemText primary={file.name} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FolderAccordion;
