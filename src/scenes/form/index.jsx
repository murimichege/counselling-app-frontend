import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

import userApi from "../../api/users";
const UserCreationForm = () => {
	const isNonMobile = useMediaQuery("(min-width:600px)");
    const navigate = useNavigate()

	const handleFormSubmit = async () => {

        toast.success('User Created Successfully!')
        navigate("/users")
        
		// try {

		// 	const res = await userApi.create(initialValues);
		// 	res.status(201);
		// } catch (error) {
		// 	res.status(401).json({ message: error });
		// }
	};

	return (
		<Box m="20px">
                  <Toaster />

			<Header title="CREATE USER" subtitle="Create a New User Profile" />

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
							<TextField
								fullWidth
								// variant="filled"
								type="text"
								label="First Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.firstName}
								name="firstName"
								error={!!touched.firstName && !!errors.firstName}
								helperText={touched.firstName && errors.firstName}
								sx={{ gridColumn: "span 2" }}
							/>
							<TextField
								fullWidth
								// variant="filled"
								type="text"
								label="Last Name"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.lastName}
								name="lastName"
								error={!!touched.lastName && !!errors.lastName}
								helperText={touched.lastName && errors.lastName}
								sx={{ gridColumn: "span 2" }}
							/>
							<TextField
								fullWidth
								// variant="filled"
								type="text"
								label="National Identity"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.nationalidentity}
								name="nationalidentity"
								error={!!touched.nationalidentity && !!errors.nationalidentity}
								helperText={touched.nationalidentity && errors.nationalidentity}
								sx={{ gridColumn: "span 2" }}
							/>
							<TextField
								fullWidth
								select
								// variant="filled"
								type="text"
								label="Access Level"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.role}
								name="role"
								error={!!touched.role && !!errors.role}
								helperText={touched.role && errors.role}
								sx={{ gridColumn: "span 2" }}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Admin</MenuItem>
								<MenuItem value={20}>Client</MenuItem>
								<MenuItem value={30}>Super Admin</MenuItem>
								<MenuItem value={30}>Developer</MenuItem>
							</TextField>
							<TextField
								fullWidth
								// variant="filled"
								type="text"
								label="Phone Number"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.phone}
								name="phone"
								error={!!touched.phone && !!errors.phone}
								helperText={touched.phone && errors.phone}
								sx={{ gridColumn: "span 2" }}
							/>
							<TextField
								fullWidth
								// variant="filled"
								type="text"
								label="Email"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.email}
								name="email"
								error={!!touched.phone && !!errors.phone}
								helperText={touched.phone && errors.phone}
								sx={{ gridColumn: "span 2" }}
							/>

							<TextField
								fullWidth
								// variant="filled"
								type="text"
								label="Address"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.address}
								name="address"
								error={!!touched.address && !!errors.address}
								helperText={touched.address && errors.address}
								sx={{ gridColumn: "span 4" }}
							/>
						</Box>
						<Box display="flex" justifyContent="end" mt="20px">
							<Button type="submit"  color="secondary" variant="contained">
								Create New User
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
	firstName: yup.string().required("required"),
	lastName: yup.string().required("required"),
	email: yup.string().email("invalid email").required("required"),
	phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required("required"),
	address: yup.string().required("required"),
	role: yup.string().required("required"),
	nationalidentity: yup.string().required("required"),
});
const initialValues = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	nationalidentity: "",
	address: "",
	role: "",
};

export default UserCreationForm;
