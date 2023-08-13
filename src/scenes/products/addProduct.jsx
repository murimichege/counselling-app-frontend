import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import MenuItem from "@mui/material/MenuItem";
import { countryRegionData } from "country-region-data";
import { Country, State, City } from "country-state-city";
import userApi from "../../api/users";
const ProductForm = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");
	const [selectedCountry, setSelectedCountry] = useState(null);
	const [selectedState, setSelectedState] = useState(null);
	const [selectedCity, setSelectedCity] = useState(null);

	const handleFormSubmit = async () => {
		try {
			const res = await userApi.create(initialValues);
			res.status(201);
		} catch (error) {
			res.status(401).json({ message: error });
		}
	};

	return (
		<Box m="20px">
			<Header title="CREATE PRODUCT" subtitle="Create a New Product" />

			<Formik onSubmit={handleFormSubmit} initialValues={initialValues} validationSchema={checkoutSchema}>
				{({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						<Box
							display="grid"
							gap="30px"
							gridTemplateColumns="repeat(4, minmax(0, 1fr))"
							sx={{
								"& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
							}}
						>
							<TextField fullWidth type="text" label="Name" onBlur={handleBlur} onChange={handleChange} value={values.name} name="name" error={!!touched.name && !!errors.name} helperText={touched.name && errors.name} sx={{ gridColumn: "span 2" }} />
							<TextField fullWidth type="text" label="Category" onBlur={handleBlur} onChange={handleChange} value={values.category} name="category" error={!!touched.category && !!errors.category} helperText={touched.category && errors.category} sx={{ gridColumn: "span 2" }} />
							<TextField fullWidth type="text" label="status" onBlur={handleBlur} onChange={handleChange} value={values.status} name="status" error={!!touched.status && !!errors.status} helperText={touched.status && errors.status} sx={{ gridColumn: "span 2" }} />
							<TextField fullWidth type="number" label="cost_rate" onBlur={handleBlur} onChange={handleChange} value={values.cost_rate} name="cost_rate" error={!!touched.cost_rate && !!errors.cost_rate} helperText={touched.cost_rate && errors.cost_rate} sx={{ gridColumn: "span 2" }} />

							<TextField
								fullWidth
								// variant="filled"
								type="text"
								label="Description"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.Description}
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
								value={values.address}
								name="image_url"
								error={!!touched.image_url && !!errors.image_url}
								helperText={touched.image_url && errors.image_url}
								sx={{ gridColumn: "span 4" }}
							/>
						</Box>
						<Box display="flex" justifyContent="end" mt="20px">
							<Button type="submit" color="secondary" variant="contained">
								Create New Product
							</Button>
						</Box>
					</form>
				)}
			</Formik>
		</Box>
	);
};

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
	name: yup.string().required("required"),
	Description: yup.string().required("required"),
	image_url: yup.string().required("required"),
	category: yup.string().required("required"),
	cost_rate: yup.string().required("required"),
	status: yup.string().required("required"),
});
const initialValues = {
	name: "",
	Description: "",
	image_url: "",
	category: "",
	cost_rate: "",
	status: "",
};

export default ProductForm;
