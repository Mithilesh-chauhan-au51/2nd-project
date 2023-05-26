import { useState } from 'react'

import { Event, MoreVert} from '@mui/icons-material'
import { Menu, MenuItem } from '@mui/material'

const HeaderMenu = () => {
    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    return(
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    )
}


export default HeaderMenu;
