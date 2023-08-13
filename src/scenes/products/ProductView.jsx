import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useNavigate } from "react-router";

import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import productApi from "../../api/products/index";
const ProductDetail = () => {
	const { id } = useParams();
	const [product, setProduct] = useState();
	const [dialogOpen, setDialogOpen] = useState(false);

	useEffect(() => {
		const getProductDetail = async () => {
			try {
				const res = await productApi.getOne(id);
				console.log(res);
				setProduct(res);
			} catch (err) {
				console.log(err);
			}
		};
		getProductDetail();
	}, []);

	return (
		<Box m="20px">
			<Header title="PRODUCT" subtitle="List of Verified and Unverified Accounts" />{" "}
			<Grid container spacing={4}>
				<Grid item xs={8}>
					<Stack spacing={4}>{product && <ProductInfo product={product} />}</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

export default ProductDetail;
const ProductInfo = ({ product }) => {
	const [userFormData, setUserFormData] = useState({
		name: product.name,
		Description: product.Description,
		image_url: product.image_url,
		category: product.category,
		cost_rate: product.cost_rate,
		status: product.status,
	});

	return (
		<Formik onSubmit={handleFormSubmit} userFormData={userFormData} validationSchema={checkoutSchema}>
			{({ userFormData, errors, touched, handleBlur, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<Box
						display="grid"
						gap="30px"
						gridTemplateColumns="repeat(4, minmax(0, 1fr))"
						sx={{
							"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
						}}
					>
						<TextField fullWidth type="text" label="Name" onBlur={handleBlur} onChange={handleChange} value={userFormData.name} name="name" error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="text" label="Category" onBlur={handleBlur} onChange={handleChange} value={userFormData.category} name="category" error={!!touched.category && !!errors.category} helperText={touched.category && errors.category} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="text" label="status" onBlur={handleBlur} onChange={handleChange} value={userFormData.status} name="status" error={!!touched.status && !!errors.status} helperText={touched.status && errors.status} sx={{ gridColumn: "span 2" }} />
						<TextField fullWidth type="number" label="cost_rate" onBlur={handleBlur} onChange={handleChange} value={userFormData.cost_rate} name="cost_rate" error={!!touched.cost_rate && !!errors.cost_rate} helperText={touched.cost_rate && errors.cost_rate} sx={{ gridColumn: "span 2" }} />

						<TextField
							fullWidth
							// variant="filled"
							type="text"
							label="Description"
							onBlur={handleBlur}
							onChange={handleChange}
							value={userFormData.Description}
							name="Description"
							error={!!touched.Description && !!errors.Description}
							helperText={touched.Description && errors.Description}
							sx={{ gridColumn: "span 2" }}
						/>

						<TextField
							fullWidth
							// variant="filled"
							type="text"
							label="image_url"
							onBlur={handleBlur}
							onChange={handleChange}
							value={userFormData.image_url}
							name="image_url"
							error={!!touched.image_url && !!errors.image_url}
							helperText={touched.image_url && errors.image_url}
							sx={{ gridColumn: "span 4" }}
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
