import React from 'react'
import FormTitle from './FormTitle/FormTitle'
import { Box } from '@mui/system'
import { InputLabel, TextField } from '@mui/material'


function UserStep1() {
    return (<>
        <FormTitle />
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '55%',
            margin: 'auto',
            marginTop: '2rem'
        }}>
            <InputLabel shrink >Full Name</InputLabel>
            <TextField variant="outlined" placeholder="Steve Jobs" />
            <InputLabel shrink sx={{ marginTop: '1.5rem' }}>Display Name</InputLabel>
            <TextField variant="outlined" placeholder="Steve" />
        </Box>
    </>
    )
}

export default UserStep1