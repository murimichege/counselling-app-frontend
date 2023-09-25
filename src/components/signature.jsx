import React, { useState, useRef } from 'react';
import { SignatureComponent } from '@syncfusion/ej2-react-inputs';
import { ButtonComponent } from '/ej2-react-buttons';
import './default.css';

const Signature = () => {
  const [disable, setDisable] = useState(true);
  const [signatureText, setSignatureText] = useState(''); // State variable for signature text
  const signatureObj = useRef(null);

  const saveBtnClick = () => {
    if (disable) return;

    // Capture the signature data URL and update the state variable
    const signatureDataURL = signatureObj.current.toDataURL();
    setSignatureText(signatureDataURL);

    setDisable(true);
  };

  const clrBtnClick = () => {
    signatureObj.current.clear();
    if (signatureObj.current.isEmpty()) {
      setDisable(true);
    }
    setSignatureText(''); // Clear the signature text when clearing the signature
  };

  const change = () => {
    if (!signatureObj.current.isEmpty()) {
      setDisable(false);
    }
  };

  return (
    <div className='control-pane'>
      <div className="col-lg-12 control-section">
        <div id="signature-control">
          <div className='e-sign-heading'>
            <span id="signdescription">Sign below</span>
            <span className="e-btn-options">
              <ButtonComponent id="signsave" cssClass='e-primary e-sign-save' onClick={saveBtnClick} disabled={disable}>SAVE</ButtonComponent>
              <ButtonComponent id="signclear" cssClass='e-primary e-sign-clear' onClick={clrBtnClick} disabled={disable}>CLEAR</ButtonComponent>
            </span>
          </div>
          <SignatureComponent id="signature" ref={signatureObj} change={change}></SignatureComponent>
        </div>
      </div>

      {/* Display the signature text in a text field */}
      <div>
        <label>Signature Text:</label>
        <textarea rows="4" cols="50" value={signatureText} readOnly />
      </div>
    </div>
  );
};

export default Signature;
