import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MoreIcon from "@mui/icons-material/MoreVert";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "32%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "80%",
    fontSize: "0.85rem",
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const [searchValue, setSearchValue] = React.useState(""); // ✅ search state
  const router = useRouter();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    router.push("/dashboard");
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // ✅ Handle Enter press -> navigate to /search?q=
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const q = searchValue.trim();
      if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
    }
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large">
          <Badge>
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large">
          <Badge>
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1, width: "96%", position: "relative", left: "4%" }}>
      <AppBar
        position="static"
        sx={{
          height: { xs: "56px", sm: "64px", md: "8vh" },
          minHeight: { xs: "56px", sm: "64px", md: "64px" },
        }}
      >
        <Toolbar>
          <Box
            sx={{
              position: "relative",
              left: { xs: "6%", sm: "6%", md: 0 },
              display: "flex",
              gap: "16px",
              alignItems: "center",
              my: 3,
            }}
          >
            <Typography noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              Music
            </Typography>
            <Typography noWrap component="div" sx={{ display: { xs: "none", sm: "block" } }}>
              Podcast
            </Typography>

            {/* ✅ Search Input */}
            <Search
              sx={{
                border: "1px solid #5E63EA",
                borderRadius: "24px",
                height: { xs: "2rem", sm: "2.5rem" },
                position: "relative",
                left: { xs: "16%", sm: "0" },
              }}
            >
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)} // ✅ update state
                onKeyDown={handleKeyDown} // ✅ redirect on Enter
              />
            </Search>
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "216px",
                height: "48px",
                padding: "10px 20px",
                justifyContent: "center",
                alignItems: "center",
                flexShrink: "0",
                borderRadius: "30px",
                border: "1px solid #5E63EA",
                background:
                  "radial-gradient(58.01% 55.04% at 50% 50%, #5E63EA 0%, #2F3275 100%)",
                boxShadow: "0px 4px 4px 0px rgba(78, 39, 157, 0.50)",
              }}
            >
              <Typography
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                  fontFamily: "Roboto",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                Upgrade to Premium
              </Typography>
              <Box onClick={() => router.push("/dashboard")} sx={{ cursor: "pointer" }}>
                <img
                  src="/workspace_premium.svg"
                  alt="Workspace Premium"
                  style={{ height: "28px", width: "28px", cursor: "pointer" }}
                />
              </Box>
            </Box>
            <IconButton size="large" aria-label="show notifications" color="inherit">
              <Badge color="error">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <img src="/Ellipse 3379.svg" alt="Profile" style={{ height: "28px", width: "28px" }} />
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
