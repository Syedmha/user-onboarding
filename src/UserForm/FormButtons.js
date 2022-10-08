import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/material'

function FormButtons() {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                width: '55%',
                margin: 'auto',
                marginTop: '2rem',
            }}>
                <Button sx={{ backgroundColor: 'var(--primary)' }} variant="contained" size='large'>Contained</Button>
            </Box>
        </>
    )
}

export default FormButtons