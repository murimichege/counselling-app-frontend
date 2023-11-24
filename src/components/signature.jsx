import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const SignatureCapture = ({ open, onClose, onSaveSignature }) => {
  const signatureRef = useRef(null);

  const handleSaveSignature = () => {
    const capturedSignatureImage = signatureRef.current.getTrimmedCanvas().toDataURL('image/png'); // Get the trimmed canvas as an image
    saveImageLocally(capturedSignatureImage);
    onSaveSignature(capturedSignatureImage); // Pass the image data to the parent component or perform any other action
    onClose(); // Close the dialog after saving the signature
  };

  const handleClearSignature = () => {
    signatureRef.current.clear();
  };

  const saveImageLocally = (imageData) => {
    // Convert the base64 image data to a Blob
    const byteCharacters = atob(imageData.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'image/png' });

    // Create a link and trigger a download
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'signature.png'; // Define the file name
    document.body.appendChild(link); // Append the link to the body
    link.click(); // Trigger the downloadn
    document.body.removeChild(link); // Remove the link from the body after download
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Draw Your Signature</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Click "Save" when done.
        </DialogContentText>
        <SignatureCanvas
          ref={signatureRef}
          penColor="black"
          canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClearSignature}>Clear</Button>
        <Button onClick={handleSaveSignature}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SignatureCapture;
