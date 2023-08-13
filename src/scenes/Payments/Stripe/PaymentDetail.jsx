import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useNavigate } from "react-router";

import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import paymentApi from "../../../api/payments";
const StripePaymentDetail = () => {
	const { id } = useParams();
	const [stripePayment, setStripePayment] = useState();
	const [dialogOpen, setDialogOpen] = useState(false);

	useEffect(() => {
		const getStripePaymentDetail = async () => {
			try {
				const payment = await paymentApi.getOneStripePayment(id);
				console.log(payment);
				setStripePayment(payment);
			} catch (err) {
				console.log(err);
			}
		};
		getStripePaymentDetail();
	}, []);

	return (
		<Box m="20px">
			<Header title="PAYMENTS" subtitle="List of Stripe payments" />{" "}
			<Grid container spacing={4}>
				<Grid item xs={8}>
					<Stack spacing={4}>{stripePayment && <StripePaymentInfo stripePayment={stripePayment} />}</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

export default MpesaPaymentDetail;
const StripePaymentInfo = ({ mpesaPayment }) => {
	const [stripePayment, setStripePayment] = useState({
		Customer: mpesaPayment.Customer,
		amount: mpesaPayment.amount,
		currency: mpesaPayment.currency,
		timestamp: mpesaPayment.timestamp,
	});

	return (
		<Formik onSubmit={handleFormSubmit} stripePayment={stripePayment} validationSchema={checkoutSchema}>
			{({ stripePayment, errors, touched, handleBlur, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Box
						display="grid"
						gap="30px"
						gridTemplateColumns="repeat(4, minmax(0, 1fr))"
						sx={{
							"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
						}}
					>
						<TextField fullWidth type="text" label="Customer" onBlur={handleBlur} onChange={handleChange} value={stripePayment.Customer} name="Customer" error={!!touched.Customer && !!errors.Customer} helperText={touched.Customer && errors.Customer} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="text" label="currency" onBlur={handleBlur} onChange={handleChange} value={stripePayment.currency} name="currency" error={!!touched.currency && !!errors.currency} helperText={touched.currency && errors.currency} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="number" label="Amount" onBlur={handleBlur} onChange={handleChange} value={stripePayment.Amount} name="Amount" error={!!touched.Amount && !!errors.Amount} helperText={touched.Amount && errors.Amount} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="number" label="Timestamp" onBlur={handleBlur} onChange={handleChange} value={stripePayment.timestamp} name="timestamp" error={!!touched.timestamp && !!errors.timestamp} helperText={touched.timestamp && errors.timestamp} sx={{ gridColumn: "span 2" }} />
					</Box>
					<Box display="flex" justifyContent="end" mt="20px">
						<Button type="submit" color="secondary" variant="contained">
							Close
						</Button>
					</Box>
				</form>
			)}
		</Formik>
	);
};
