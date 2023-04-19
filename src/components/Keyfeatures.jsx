import React from 'react';
import Box from '@mui/material/Box';
import { Typography, Grid, Container, Stack } from '@mui/material';


// import { Container } from './styles';

function Keyfeatures() {
    return <Box sx={{ background: '#F6F8FC', marginTop: '-7px' }}>
        <Typography variant='h6' textAlign={'center'} fontFamily={'Montserrat'}>KEY FEATURES</Typography>
        <Typography variant='h3' textAlign={'center'} fontSize={42} fontWeight={700} fontFamily={'Montserrat'}>Most Probably Included<br />
            Best Features Ever</Typography>
        <Container>
            <Grid container spacing={4} pt={4}>
                <Grid item md={4} xs={12}>
                    <Stack spacing={5}>
                        <Stack direction={'row'} spacing={2}>
                            <img src='/images/data-management.webp' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Latest Technologies</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>COMMERCEHOPE is developed with lastest technologies such as Reactjs, Nextjs, MUI,</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <img src='/images/night-mode.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Dark Mode</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>COMMERCEHOPE consists on dark and light mode that can be changed by user.</Typography>
                            </Stack>
                        </Stack> <Stack direction={'row'} spacing={2}>
                            <img src='/images/payment.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Payment Gateways</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>COMMERCEHOPE consists on stripe payment method where admin can receive and withdraw payments.</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack spacing={5}>
                        <Stack direction={'row'} spacing={2}>
                            <img src='/images/browser.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Open Source</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>COMMERCEHOPE is an fully open source product can be installed with personal domain.</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <img src='/images/responsive.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Responsive Design</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>CCOMMERCEHOPE is a pixel perfect web application designed responsive for all devices</Typography>
                            </Stack>
                        </Stack> <Stack direction={'row'} spacing={2}>
                            <img src='/images/security.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Security</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>We take security seriously and back our product with a Security Bounty Program to encourage responsible disclosure by researchers.</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid item md={4} xs={12}>
                    <Stack spacing={5}>
                        <Stack direction={'row'} spacing={2}>
                            <img src='/images/color-palette.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Color presets</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>COMMERCEHOPE has 6 theme colors can be changed by user. This makes a website modern.</Typography>
                            </Stack>
                        </Stack>
                        <Stack direction={'row'} spacing={2}>
                            <img src='/images/seo.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>SEO Friendly</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>Nextjs privides SEO for ranking website and products on top of page.</Typography>
                            </Stack>
                        </Stack> <Stack direction={'row'} spacing={2}>
                            <img src='/images/brush.png' width={'40px'} height={'40px'} alt='data' />
                            <Stack>
                                <Typography variant='h6' fontFamily={'Montserrat'} fontSize={'16px'} fontWeight={600}>Customization</Typography>
                                <Typography variant='body2' fontFamily={'Montserrat'} fontSize={'12px'} fontWeight={400}>A flexible and powerful templating engine and many built-in options allow you to fully customize the system to your needs.</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Container>
    </Box>;
}

export default Keyfeatures;