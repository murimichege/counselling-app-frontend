import { useState, useEffect } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { useNavigate,Link } from "react-router-dom";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined"
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import userApi from "../../api/users";
const Sessions = () => {
	const [statusAccounts, setstatusAccounts] = useState([]);
	const theme = useTheme();
	const navigate = useNavigate();
	const colors = tokens(theme.palette.mode);
	const columns = [
		{ field: "id", headerName: "ID" },
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column--cell",
		},
		{
			field: "email",
			headerName: "Email",
			flex:1
			// headerAlign: "left",
			// align: "left",
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		{
			field: "mode",
			headerName: "Mode",
			flex: 1,
		},
		{
			field: "Status",
			headerName: "Status",
			flex: 1,
			renderCell: ({ row: { status } }) => {
				return (
					<Box width="90%" m="0 auto" p="5px" display="flex"  backgroundColor={status === "verified" ? colors.greenAccent[600] : status === "unverified" ? colors.greenAccent[700] : colors.greenAccent[700]} borderRadius="4px">
						{status === "verified" && <AdminPanelSettingsOutlinedIcon />}
						{status === "unverified" && <SecurityOutlinedIcon />}
						<Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
							{status}
						</Typography>
					</Box>
				);
			},
		},

		{
			field: "Actions",
			headerName: "Actions",
			width: 170,
			renderCell: (params) => (
				<Button variant="text" component={Link} to={`/session/${params.id}`} startIcon={<OpenInNewOutlinedIcon />}>
					Open
				</Button>
			),
		},
	];
	const createSession = () => {
		navigate("/newsession");
	};

	return (
		<Box m="20px">
			{/* HEADER */}
			<Header title="Sessions" subtitle="List of Sessions by different counselors" />
			<Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={createSession}
          >
            Create session
          </Button>
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
				{/* <DataGrid checkboxSelection rows={statusAccounts} columns={columns} /> */}
				<DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> 
			</Box>
		</Box>
	);
};

export default Sessions;
