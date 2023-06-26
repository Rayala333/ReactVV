import React from 'react';
import {AppBar, Box, Toolbar,styled,Typography} from '@mui/material'

const StyledHader = styled(AppBar)`
backgroung:#2874f0;
height:55px; `

const Component = styled(Box)`
margin-left: 12%;
line-height:0`

const SubHading = styled(Typography)`
font-size:10px;
font-style: italic`

const Header = () => {
    const LogoUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  return (
    <StyledHader>
        <Toolbar>
            <Component>
                <img src={LogoUrl} style={{width:75}} alt='Logo'/>
                <Box>
                    <SubHading>Explore
                        <Box component='span' style={{color:'#FFE500'}}> Plus</Box>
                    </SubHading>
                </Box>
            </Component>
        </Toolbar>

    </StyledHader>
  )
}

export default Header