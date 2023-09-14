import { FC, useState } from "react";
import PropTypes from "prop-types";
// import type { Invoice } from 'src/models/invoice';
import {
  Box,
  Typography,
  Card,
  Grid,
  Divider,
  Container,
  Tooltip,
  Button,
  Table,
  TextField,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableFooter,
  TableContainer,
  styled,
} from "@mui/material";
// import { format } from 'date-fns';
// import numeral from 'numeral';
// import { useAuth } from 'src/hooks/useAuth';
// import Logo from 'src/components/LogoSign';
// import { useTranslation } from 'react-i18next';
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import PictureAsPdfTwoToneIcon from "@mui/icons-material/PictureAsPdfTwoTone";

const BoxWrapper = styled(Box)(
  ({ theme }) => `
  border-radius: 12px;
};
`
);

const TableWrapper = styled(Box)(
  ({ theme }) => `
  border: 1px solid ;
  border-bottom: 0;
  margin: 
} 0;
`
);

const LogoWrapper = styled(Box)(
  () => `
    width: '52px'
`
);

// interface InvoiceBodyProps {
//   invoice: Invoice;
// }

// interface Item {
//   id: number;
//   name: string;
//   quantity: number;
//   price: number;
//   currency: string;
// }

const ConsentForm = ({ invoice }) => {
  //   const { t }  = useTranslation();
  //   const { user } = useAuth();

  const itemsList = [
    {
      id: 1,
      name: "Design services for March",
      quantity: 1,
      price: 8945,
      currency: "$",
    },
    {
      id: 2,
      name: "Website migration services",
      quantity: 3,
      price: 2367,
      currency: "$",
    },
  ];

  const [items] = useState(itemsList);
  const [signature, setSignature] = useState("");
  const [Name, setName] = useState("");
  const [Position, setSPosition] = useState("");
  const [CurrentDate, setCurrentDate] = useState("");

  const handleInputChange = () => {};
  return (
    <Container maxWidth="lg">
      <Card
        sx={{
          p: 3,
          mb: 3,
        }}
      >
        <Box display="flex" alignItems="flex-start" justifyContent="center">
          <Box>
            <Typography variant="h1" gutterBottom>
              {('Consent and Confidentiality Form')}
            </Typography>
            <Typography variant="h3" gutterBottom>
              {/* {"Consent Form"} */}
            </Typography>
            <Typography variant="h3" color="text.secondary">
              {/* #{invoice.number} */}
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{
            my: 4,
          }}
        />

        <Typography variant="subtitle1" gutterBottom></Typography>
        <Typography
          variant="body4"
          sx={{ justifyContent: "center", display: "flex" }}
        >
          The Counseling Center maintains a strict level of client
          confidentiality. This means that individuals using any of the service
          offered by the Center can <br />expect that their privacy will
          be represented. They can trust that their information will not be
          discussed or disclosed to anyone outside of the Counseling Center.
          <br />
          <br/>
          All Counseling Center staff members or those individuals working in
          the center are therefore required to acknowledge and commit to
          maintaining the highest standard of
          <br /> confidentiality. It is understood that continued employment
          with the Counseling Center is based on maintaining this standard.
          Anyone who
          breaks confidentiality will be immediately dismissed. <br/> <br/>I have read and
          understand the above; I understand the requirements of continued
          employment at the Counseling Center.{" "}
        </Typography>
       
        <Box
          sx={{ marginTop: "40px", justifyContent: "center", display: "flex" }}
        >
        
          <TextField
            id="outlined-select-currency"
            label="Name"
            name="Name"
            variant="standard"
            value={Name}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
           <TextField
            label="Position"
            name="Position"
            variant="standard"
            value={Position}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
        </Box>
        <Box
          sx={{ marginTop: "40px", justifyContent: "center", display: "flex" }}
        >
          <TextField
            label="Date"
            name="Date"
            variant="standard"
            value={CurrentDate}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
          <TextField
            id="outlined-select-currency"
            label="Signature"
            name="Signature"
            variant="standard"
            value={signature}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
    
        </Box>

        <Typography
          variant="body4"
          sx={{ justifyContent: "center", display: "flex", marginTop:"40px" }}
        >
         I  _____________________(client) give consent for receiving counseling services. My Counselor
has explained to me the counseling process and I understand that,<br/> therapeutic counseling requires my
active involvement including my effort to change or undertake tasks given to me during and in between
sessions. <br/>I also understand that the issues discussed in the counseling process will remain confidential
and that the oath of confidentiality will be broken with my permission <br/>or if I plan to harm myself or
another person. When counseling is mandated by a referral source I understand that the counselor will
provide the required information on my attendance,<br/> progress in counseling and in case a psychological
diagnosis is required the counselor will inform me and give the information with my full knowledge and
permission.{" "}
        </Typography>


        <Typography
          variant="body4"
          sx={{ justifyContent: "center", display: "flex", marginTop:"40px" }}
        >
        If you have any questions please feel free to ask. Kindly sign and date this form.
        </Typography>

        <Box
          sx={{ marginTop: "40px", justifyContent: "center", display: "flex" }}
        >
          <TextField
            label="Date"
            name="Date"
            variant="standard"
            value={CurrentDate}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
          <TextField
            id="outlined-select-currency"
            label="Signature"
            name="Signature"
            variant="standard"
            value={signature}
            inputProps={{
              style: { height: "auto" },
            }}
            onChange={handleInputChange}
            sx={{
              marginRight: "20px",
              width: "240px",
              height: "auto",
              gridColumn: "span 2",
            }}
          />
    
        </Box>
        <Tooltip
          placement="top"
          arrow
          title="This functionality will be added in a future release!"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mt={4}
          >
            <Button
              disabled
              variant="contained"
              sx={{
                mx: 2,
              }}
              startIcon={<DownloadTwoToneIcon />}
            >
              {"Save Form"}
            </Button>
            {/* <Button
              disabled
              variant="outlined"
              sx={{
                mx: 2,
              }}
              startIcon={<PictureAsPdfTwoToneIcon />}
            >
              {"y PDF"}
            </Button> */}
          </Box>
        </Tooltip>
      </Card>
    </Container>
  );
};

export default ConsentForm;
