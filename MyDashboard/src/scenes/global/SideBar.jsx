import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

import userProfile from "../../assets/user-profile-4255.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{ title}</Typography>
    </MenuItem>
  );
};
export default function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height:"140vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
        "& .ps-sidebar-container": {
          border: "none",
          background: `${colors.primary[400]} ! important`,
        },

        "& .ps-menu-button:hover": {
          color: `#868dfb !important`,
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
                
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  src={userProfile}
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                > 
                  ZAYN
                </Typography>
                <Typography
                  variant="h5"
                  color={colors.greenAccent[500]}
                >VP Fancy Admin</Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "5%"} marginLeft={isCollapsed ? "-24%":undefined} >
          <MenuItem component={<Link to="/" />}> 
            <Item
              title='Dashboard'
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              </MenuItem>
            <Typography
              
              variant="h6"
              color={colors.grey[300]}
              sx={{m:"30px 0 5px 30px"}}
            >Data
            </Typography>
            <MenuItem component={<Link to="team" />}> 
            <Item
              title='Manage Team'
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
            </MenuItem>
            <MenuItem component={<Link to="contacts" />}> 
            <Item
              title='Contacts info'
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
            </MenuItem>
            <MenuItem component={<Link to="invoices" />}> 
            <Item
              title='Invoices Balances'
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </MenuItem>
              <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m:"30px 0 5px 30px"}}
            >Pages
            </Typography>
            <MenuItem component={<Link to="form" />}> 
            <Item
              title='Profile Form'
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              /> 
            </MenuItem>
            <MenuItem component={<Link to="calendar" />}> 
            <Item
              title='Calendar'
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </MenuItem>
            <MenuItem component={<Link to="faq" />}> 
            <Item
              title='FAQ Page'
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              />
              </MenuItem>
              <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{m:"30px 0 5px 30px"}}
            >Charts
            </Typography>
            <MenuItem component={<Link to="bar" />}> 
            <Item
              title='Bar chart'
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            </MenuItem>
            <MenuItem component={<Link to="pie" />}> 
            <Item
              title='Pie Chart'
              icon={<PieChartOutlineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
            </MenuItem>
            <MenuItem component={<Link to="line" />}> 
            <Item
              title='Line Chart'
              icon={<TimelineOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
            />
            </MenuItem>
            <MenuItem component={<Link to="geography" />}> 
            <Item
              title='Geography Chart'
              icon={<MapOutlinedIcon/>}
              selected={selected}
              setSelected={setSelected}
              />
              </MenuItem>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
}
