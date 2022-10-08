import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

function FormTitle() {
    return (
        <Box mt='4rem'>
            <Typography
                variant='h4'
                sx={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    fontFamily: 'inter',
                    fontWeight: '600'
                }}
            >
                Welcome! First things first...
            </Typography>
            <Typography
                variant='h4'
                mt='0.5rem'
                sx={{
                    textAlign: 'center',
                    fontSize: '1rem',
                    fontFamily: 'inter',
                    fontWeight: '400'
                }}
            >
                You can always change them later
            </Typography>
        </Box >

    )
}

export default FormTitle