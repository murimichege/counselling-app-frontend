import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItemText,
  ListItem,
  
} from "@mui/material";
import {makeStyles} from '@mui/styles'
import { useDropzone } from "react-dropzone";
import FolderOpenTwoToneIcon from "@mui/icons-material/FolderOpenTwoTone";
import ChevronRightTwoToneIcon from "@mui/icons-material/ChevronRightTwoTone";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";

  // Styling for the upload box
  const boxUploadWrapper = {
    borderRadius: "12px",
    padding: "16px", // Use static padding value
    border: "1px dashed #000", // Use static border value
    outline: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "border 0.3s, background 0.3s",
  };
  
  const avatarWrapper = {
    background: "#2196F3", // Use a static color
    color: "#fff", // Use a static color
    width: "56px", // Use static width
    height: "56px", // Use static height
  };
  
  const avatarSuccess = {
    background: "#4CAF50", // Use a static color
    width: "56px", // Use static width
    height: "56px", // Use static height
  };
  
const folders = [
  {
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },
  {
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },{
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },{
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },{
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },{
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },{
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },{
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },{
    title: "Session 1",
    links: [
      { label: "Link 1", url: "/link1" },
      { label: "Link 2", url: "/link2" },
    ],
    uploadedFiles: [],
  },
  // Add more folders here
];

function FolderAccordion({ title, fileCount, links, uploadedFiles }) {
  const [files, setFiles] = useState([]);

  const {
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles);
    },
  });

  return (
    <Accordion variant="outlined" sx={{ borderRadius: "10px" }}>
      <AccordionSummary expandIcon={<ChevronRightTwoToneIcon />}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={2}
          width="100%"
        >
          <Box display="flex" alignItems="center">
            <Avatar className={avatarWrapper}>
              <FolderOpenTwoToneIcon />
            </Avatar>
            <Box>
              <Typography variant="h4" color="text.primary" gutterBottom noWrap>
                {title}
              </Typography>
              <Typography variant="subtitle1">
                <b>{fileCount}</b> files
              </Typography>
            </Box>
          </Box>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="subtitle1">Links:</Typography>
          <Box mt={1} display="grid">
            {links.map((link, index) => (
              <a key={index} href={link.url}>
                <InsertLinkIcon /> {link.label}
              </a>
            ))}
          </Box>
          <Box
            {...getRootProps()}
            className={boxUploadWrapper}
          >
            <input {...getInputProps()} />
            {isDragAccept && (
              <>
                <Avatar
                  className={avatarSuccess}
                >
                  <CheckTwoToneIcon />
                </Avatar>
                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  {"Drop the files to start uploading"}
                </Typography>
              </>
            )}
            {isDragReject && (
              <>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: "error.main",
                  }}
                >
                  <CloseTwoToneIcon />
                </Avatar>
                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  {"You cannot upload these file types"}
                </Typography>
              </>
            )}
            {!isDragActive && (
              <>
                {/* <AvatarWrapper className={classes.avatarWrapper}> */}
                  <CloudUploadTwoToneIcon />
                {/* </AvatarWrapper> */}
                <Typography
                  sx={{
                    mt: 2,
                  }}
                >
                  {"Drag & drop files here"}
                </Typography>
              </>
            )}
          </Box>
          {files.length > 0 && (
            <>
              <Typography
                variant="subtitle1"
                sx={{
                  mt: 2,
                }}
              >
                Uploaded Files:
              </Typography>
              <List disablePadding component="div">
                {files.map((file, index) => (
                  <ListItem
                    disableGutters
                    component="div"
                    key={index}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <ListItemText primary={file.name} />
                    <Typography variant="body2">
                      <b>{file.size} bytes</b>
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

function SessionDocuments() {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pb: 3,
        }}
      >
        <Typography variant="h3">Session Documents</Typography>
      </Box>

      <Grid container spacing={3}>
        {folders.map((folder, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <FolderAccordion {...folder} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SessionDocuments;
