import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useNavigate } from "react-router";

import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import paymentApi from "../../../api/payments";
const MpesaPaymentDetail = () => {
	const { id } = useParams();
	const [mpesaPayment, setMpesaPayment] = useState();
	const [dialogOpen, setDialogOpen] = useState(false);

	useEffect(() => {
		const getMpesaPaymentDetail = async () => {
			try {
				const payment = await paymentApi.getOneMpesaPayment(id);
				console.log(payment);
				setMpesaPayment(payment);
			} catch (err) {
				console.log(err);
			}
		};
		getMpesaPaymentDetail();
	}, []);

	return (
		<Box m="20px">
			<Header title="PRODUCT" subtitle="List of Verified and Unverified Accounts" />{" "}
			<Grid container spacing={4}>
				<Grid item xs={8}>
					<Stack spacing={4}>{mpesaPayment && <MpesaPaymentInfo mpesaPayment={mpesaPayment} />}</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MpesaPaymentDetail;
const MpesaPaymentInfo = ({ mpesaPayment }) => {
	const [mpesaPayment, setmpesaPayment] = useState({
		Customer: mpesaPayment.Customer,
		Date: mpesaPayment.Timestamp,
		TransactionType: mpesaPayment.TransactionType,
		Amount: mpesaPayment.Amount,
		PhoneNumber: mpesaPayment.PhoneNumber,
        AccountReference: mpesaPayment.AccountReference,
		TransactionDesc: mpesaPayment.TransactionDesc,
        BusinessShortCode: mpesaPayment.BusinessShortCode,
	});

	return (
		<Formik onSubmit={handleFormSubmit} mpesaPayment={mpesaPayment} validationSchema={checkoutSchema}>
			{({ mpesaPayment, errors, touched, handleBlur, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Box
						display="grid"
						gap="30px"
						gridTemplateColumns="repeat(4, minmax(0, 1fr))"
						sx={{
							"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
						}}
					>
						<TextField fullWidth type="text" label="Customer" onBlur={handleBlur} onChange={handleChange} value={mpesaPayment.Customer} name="Customer" error={!!touched.Customer && !!errors.Customer} helperText={touched.Customer && errors.Customer} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="text" label="BusinessShortCode" onBlur={handleBlur} onChange={handleChange} value={mpesaPayment.BusinessShortCode} name="category" error={!!touched.category && !!errors.category} helperText={touched.category && errors.category} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="number" label="Amount" onBlur={handleBlur} onChange={handleChange} value={mpesaPayment.Amount} name="Amount" error={!!touched.Amount && !!errors.Amount} helperText={touched.Amount && errors.Amount} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="number" label="TransactionDesc" onBlur={handleBlur} onChange={handleChange} value={mpesaPayment.TransactionDesc} name="TransactionDesc" error={!!touched.TransactionDesc && !!errors.TransactionDesc} helperText={touched.TransactionDesc && errors.TransactionDesc} sx={{ gridColumn: "span 2" }} />

						<TextField
							fullWidth
							// variant="filled"
							type="text"
							label="AccountReference"
							onBlur={handleBlur}
							onChange={handleChange}
							value={mpesaPayment.AccountReference}
							name="Description"
							error={!!touched.AccountReference && !!errors.AccountReference}
							helperText={touched.AccountReference && errors.AccountReference}
							sx={{ gridColumn: "span 2" }}
						/>

						<TextField
							fullWidth
							// variant="filled"
							type="number"
							label="PhoneNumber"
							onBlur={handleBlur}
							onChange={handleChange}
							value={mpesaPayment.PhoneNumber}
							name="PhoneNumber"
							error={!!touched.PhoneNumber && !!errors.PhoneNumber}
							helperText={touched.PhoneNumber && errors.PhoneNumber}
							sx={{ gridColumn: "span 2" }}
						/>
					</Box>
					<Box display="flex" justifyContent="end" mt="20px">
						<Button type="submit" color="secondary" variant="contained">
							Create New User
						</Button>
					</Box>
				</form>
			)}
		</Formik>
	);
};
