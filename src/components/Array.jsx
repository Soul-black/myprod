import React, {useState} from 'react';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

import Delete from './Delete';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';



function Array({rows}){


    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleCheckboxChange = (userId) => {
            if (selectedUsers.includes(userId)) {
                 setSelectedUsers(selectedUsers.filter(id => id !== userId));
            } else {
                setSelectedUsers([...selectedUsers, userId]);
            }
        };

    const selectAllUsers = () => {
            if (selectedUsers.length === rows.length) {
                    setSelectedUsers([]);
            } else {
                const allUserIds = rows.map(user => user.id);
                setSelectedUsers(allUserIds);
            }
        };

   
        
    return (
        <>
        <TableContainer component={Paper}>  
            <Table sx={{marginTop:10}}>
                        <TableRow >
                        
                        <TableCell align="center"><Checkbox
                            checked={selectedUsers.length === rows.length}
                            onChange={selectAllUsers}/>
                        </TableCell>
                        <TableCell align="center"><b>id</b></TableCell>
                        <TableCell align="center"><b>Имя</b></TableCell>
                        <TableCell align="center"><b>Должность</b></TableCell>
                        <TableCell align="center"><b>Опыт</b></TableCell>
                        <TableCell align="center"><b>Зарплата</b></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center"></TableCell>
                        <TableCell align="center">{selectedUsers.length === rows.length && (<Button><Delete/></Button>)}
            </TableCell>

                    </TableRow>
                
                    {rows.map((user) => (
                        
                            <TableRow key={user.id}>

                               
                            <TableCell align="center">
                                <Checkbox checked={selectedUsers.includes(user.id)}onChange={() => handleCheckboxChange(user.id)}/>
                            </TableCell>
                            <TableCell align="center">{user.id}</TableCell>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.post}</TableCell>
                            <TableCell align="center">{user.experience}</TableCell>
                            <TableCell align="center">{user.salary}</TableCell>
                            <TableCell align="center"><Button><Link to="/view"><VisibilityRoundedIcon/></Link></Button></TableCell>
                            <TableCell align="center"><Button><Link to="/edit"><ModeEditOutlineIcon/></Link></Button></TableCell>
                            <TableCell align="center"><Button><Delete/></Button></TableCell>
                        </TableRow>
                    ))}
                     
                </Table>
                </TableContainer>

            
            
                </>
    )
}

export default Array;
                    