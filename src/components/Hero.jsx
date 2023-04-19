import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Paper, Container, Typography, Button, capitalize, Stack, Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box pt={4} fontFamily={'Montserrat'} sx={{

            backgroundImage: 'url(./images/JShine.jpg)', height: '100vh'

        }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={5} xs={12}>
                        <Stack spacing={2} mt={4}>

                            <Typography variant='h3' fontSize={48} fontWeight={700} fontFamily={'Montserrat'}>Ecommerce Open Source Script</Typography>
                            <Typography variant='h5' fontFamily={'Montserrat'}>Material UI components</Typography>
                            <p>
                                <b> COMMERCEHOPE</b> is an Open Source Reactjs Ecommerce Script gives you the power to create your own ecommerce web application.
                            </p>
                            <Stack direction={'row'}>
                                <Button variant="contained" size='large' sx={{ height: '48px', fontFamily: 'Montserrat', fontSize: '15px', textTransform: 'capitalize', fontWeight: '700', mr: '10px', }} endIcon={<ArrowForwardIosIcon sx={{ width: '14px' }} />}>Purchase Now </Button>
                                <Button variant="contained" size='large' color='warning' sx={{ height: '48px', fontFamily: 'Montserrat', fontSize: '15px', textTransform: 'capitalize', fontWeight: '700', }} endIcon={<ArrowForwardIosIcon sx={{ width: '14px' }} />}>Live Perview</Button>
                            </Stack>
                        </Stack>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box position='relative' >
                            <img src='./images/commercehope-app-desktop.webp' width="100%" />
                            <Box position='absolute' sx={{ top: '105px', right: '-55px', borderRadius: '8px' }} s>
                                <img src='./images/commercehope-mobile-app.webp' width="100%" height={'374'} sx={{ borderRadius: '8px' }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
}