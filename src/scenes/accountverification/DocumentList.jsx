import React, { useState, useEffect } from "react";
import { Card, Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AWS from "aws-sdk";
import VerificationDoc from "./verificationdocs";
import DocumentTable from "./DocumentTable";
import wordicon from '../../assets/wordicon.png'
import pdficon from '../../assets/pdf.png'

function DocumentList() {
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const bucketLink = "https://s3.console.aws.amazon.com/s3/buckets/export-order-verification-document-bucket";

  useEffect(() => {
    async function fetchDocuments() {
      // Extract the bucket name and key prefix from the bucketLink
      const regex = /s3:\/\/(.+?)\/(.+)/;
      const [_, bucketName, keyPrefix] = regex.exec(bucketLink);

      // Create an S3 object
      const s3 = new AWS.S3();

      // Use the listObjectsV2 method to fetch the list of objects in the bucket with the given key prefix
      const response = await s3
        .listObjectsV2({ Bucket: bucketName, Prefix: keyPrefix })
        .promise();

		console.log("response" , response)

      // Map the list of objects to an array of documents
      const documents = response.Contents.map((object) => ({
        name: object.Key.substring(keyPrefix.length),
        icon: object.Key.endsWith(".pdf") ? (
          <img style={{ width: "40px", height: "40px" }} src={pdficon} alt="PDF" />
        ) : (
          <img style={{ width: "40px", height: "40px" }} src={wordicon} alt="Word" />
        ),
        uploadDate: object.LastModified.toDateString(),
        owner: "Eddie Chege",
        status: "unverified",
        url: `https://${bucketName}.s3.amazonaws.com/${object.Key}`,
      }));

      setDocuments(documents);
    }

    fetchDocuments();
  }, [bucketLink]);

  function handleDocumentClick(document) {
    setSelectedDocument(document.url);
  }

  return (
    <Box m="20px">
      <h2>Verification Documents</h2>
      <Card
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
        }}
      >
        <Box
          style={{
            marginTop: "40px",
            marginLeft: "20px",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="All documents" />
            <Tab label="Verified" />
            <Tab label="Pending" />
            <Tab label="Unverified" />
          </Tabs>
        </Box>

        <Typography
          style={{
            marginLeft: "29px",
            marginTop: "20px",
            fontSize: "20px",
            fontWeight: 600,
          }}
        >
          {documents.length} Documents
        </Typography>

        <Box>
          <DocumentTable documents={documents} />
        </Box>
      </Card>
      {/* {selectedDocument && <VerificationDoc document={selectedDocument} />} */}
    </Box>
  );
}

export default DocumentList;
