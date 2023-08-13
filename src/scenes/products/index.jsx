import { useEffect, useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useNavigate } from "react-router";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import productApi from "../../api/products";
const Product = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const colors = tokens(theme.palette.mode);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			const prod = await productApi.getAll();
			setProducts(prod);
		};

		getProducts();
	}, []);

	const columns = [
		{ field: "_id", headerName: "ID" },
		{
			field: "Product_Name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "Product_Description",
			headerName: "Description",
			type: "number",
			headerAlign: "left",
			align: "left",
		},
		{
			field: "Product_Category",
			headerName: "Category",
			flex: 1,
		},
		{
			field: "Product_Cost_Percentage",
			headerName: "Cost_Rate",
			flex: 1,
		},
		{
			field: "Product_Status",
			headerName: "status",
			flex: 1,
			renderCell: ({ row: { status } }) => {
				return (
					<Box width="60%" m="0 auto" p="5px" display="flex" justifyContent="center" backgroundColor={status === "active" ? colors.greenAccent[600] : status === "InActive" ? colors.greenAccent[700] : colors.greenAccent[700]} borderRadius="4px">
						{status === "Active" && <AdminPanelSettingsOutlinedIcon />}
						{status === "InActive" && <SecurityOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
							{status}
						</Typography>
					</Box>
				);
			},
		},
	];

	const createUser = () => {
        

    };
	return (
		<Box m="20px">
			{/* HEADER */}
			<Box display="flex" justifyContent="space-between" alignItems="center">
				<Header title="PRODUCTS" subtitle="Managing the Products" />
				<Button
					sx={{
						backgroundColor: colors.blueAccent[700],
						color: colors.grey[100],
						fontSize: "14px",
						fontWeight: "bold",
						padding: "10px 20px",
					}}
					onClick={createUser}
				>
					<DownloadOutlinedIcon sx={{ mr: "10px" }} />
					Create Product
				</Button>
			</Box>
			<Box
				m="40px 0 0 0"
				height="75vh"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
					},
					"& .name-column--cell": {
						color: colors.greenAccent[300],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colors.blueAccent[700],
					},
					"& .MuiCheckbox-root": {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid checkboxSelection rows={products} columns={columns} />
			</Box>
		</Box>
	);
};

export default Product;
