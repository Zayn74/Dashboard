import React from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "./../../theme";
import { mockDataContacts } from "./../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";


export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "Register ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "address", headerName: "Address" },
    { field: "city", headerName: "City" },
    { field: "zipCode", headerName: "ZipCode" },
  ];
  return (
    <Box m="20px">
      <Header title="CONTACTS" subTitle="List of Contacts for Future Refrence" />
      <Box m="20px 0 0 0" height="75vh" sx={{
        "& .MuiDataGrid-root": {
          border:"none"
        },
        "& .MuiDataGrid-row": {
          borderBottom:"none !important"
        },
        "& .name-column--cell": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeader": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none !important"
        },
        "& .MuiDataGrid-virtualScrollerContent": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none !important" ,
          backgroundColor: colors.blueAccent[700]
              },
              "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color:`${colors.grey[100]} !important `
        }
      }}>
              <DataGrid rows={mockDataContacts} columns={columns} slots={{ toolbar: GridToolbar }} />
      </Box>
    </Box>
  );
}
