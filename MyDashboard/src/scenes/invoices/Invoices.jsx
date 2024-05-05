import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "./../../theme";
import { mockDataInvoices } from "./../../data/mockData";
import Header from "../../components/Header";


export default function Invoices() {
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
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography sx={{mt:"15px"}} color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "date", headerName: "Date", flex: 1 },
  ];
  return (
    <Box m="20px">
      <Header title="INVOICES" subTitle="List of Invoice Balances" />
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
              "& .MuiCheckbox-root": {
            color:`${colors.greenAccent[200]} !important`
        }
      }}>
              <DataGrid rows={mockDataInvoices} columns={columns} checkboxSelection />
      </Box>
    </Box>
  );
}
