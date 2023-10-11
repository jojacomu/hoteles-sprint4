import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import styles from "./Menus.module.css"
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

export const MenuMain = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.containerMenu}>
                <Toolbar variant="dense" className={styles.optionMenu}>

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link href={'/'}>
                    <Typography variant="h6" color="inherit" component="div" className={styles.labelMenu}>
                        Home
                    </Typography>
                    </Link>
                    <Typography variant="h6" color="inherit" component="div" className={styles.labelMenu}>
                        Reservas
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
