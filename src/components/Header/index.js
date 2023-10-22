import React from "react"
import {AppBar, Box, FormControlLabel, FormGroup, Menu, MenuItem, Switch, Toolbar, Typography} from "@mui/material";
import HeaderLogo from "../../shared/icons/headerLogo";
import IconButton from "@mui/material/IconButton";
import {AccountCircle} from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
        >
            <Box>
                <HeaderLogo />
            </Box>
            <Box
                display="flex"
                marginRight="20px"
                alignItems="center"
            >
                {auth && (
                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>О нас</MenuItem>
                            <MenuItem onClick={handleClose}>Проекты</MenuItem>
                            <MenuItem onClick={handleClose}>Материалы</MenuItem>
                            <MenuItem onClick={handleClose}>Отзывы</MenuItem>
                        </Menu>
                    </div>
                )}
            </Box>

        </Box>

    )
}

export default Header;