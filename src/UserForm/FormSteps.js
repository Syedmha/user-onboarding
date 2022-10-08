import React from 'react'
import { Stepper, Step, StepLabel } from '@mui/material'
import { Box } from '@mui/material'

function FormSteps() {
    const steps = ["", "", "", ""]
    return (
        <>
            <Box sx={{
                width: '60%',
                margin: 'auto',
            }}>
                <Stepper activeStep={1} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>

        </>
    )
}

export default FormSteps