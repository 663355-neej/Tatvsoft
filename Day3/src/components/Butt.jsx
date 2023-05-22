import React from 'react';
import { Stack, Button, ButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const Butt = () => {
    return (<>
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <Button size='medium' color='warning' variant='text'>Click</Button>
                <Button size='large' color='success' variant='contained' href='https://www.google.com'>success</Button>
                <Button size='mediun' color='primary' variant='outlined'>Click</Button>
                <Button size='medium' color='primary' variant='contained'>primary</Button>
                <Button size='medium' color='secondary' variant='contained'>secondary</Button>
                <Button size='large' color='warning' variant='contained' onClick={() => { alert('Alert Message') }}>warning</Button>
                <Button size='medium' color='error' variant='contained'>error</Button>
                <Button size='medium' color='info' variant='contained'>info</Button>
            </Stack>
            <Stack spacing={3} direction='row'>
                <Button variant='contained' startIcon={<SendIcon/>}>Send</Button>
        <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
                <ButtonGroup>
                    <Button variant='contained'>button1</Button>
                    <Button variant='contained'>button2</Button>
                    <Button variant='contained'>button3</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={3} direction='row'>
                <ButtonGroup variant='contained' orientation='vertical' color='warning'>
                    <Button>button1</Button>
                    <Button>button2</Button>
                    <Button>button3</Button>
                </ButtonGroup>
            </Stack>
        </Stack>
    </>);
}
export default Butt;