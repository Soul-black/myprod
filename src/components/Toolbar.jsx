import * as React from 'react';
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import SvgIcon from '@mui/material/SvgIcon';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export default function TextButtons() {
    return (
        <AppBar>

                <Toolbar>
                    <IconButton
                    color='inherit'>
                        <HomeIcon />
                    </IconButton>
                    <Typography variant='h6'>Атоммаш</Typography>
                    <Paper sx={{ p: '2px 4px',ml:25, mr:60, display: 'flex', alignItems: 'center', width: 300 }}>
                        <IconButton >
                            <SearchIcon />
                        </IconButton>
                        <InputBase placeholder="Поиск"/>
                    </Paper>
                    <Box mr={3}>
                        <Button color='inherit' variant='outlined'>Log in</Button>
                    </Box>
                    <Button color='inherit' variant='outlined'>Sign up</Button>
                </Toolbar>
        </AppBar>
    );

}