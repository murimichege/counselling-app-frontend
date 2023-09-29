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
    onSaveSignature(capturedSignatureImage);
    onClose(); // Close the dialog after saving the signature
  };

  const handleClearSignature = () => {
    signatureRef.current.clear();
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
