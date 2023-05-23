import { Button, ThemeProvider, createTheme } from '@mui/material';
import React, { useState } from 'react';
const customtheme=createTheme({
    palette:{
        primary:{
            main:'#0712f3'
        },
        info:{
            main:'#000000'
        }
    }
})
const Hook = () => {
    const [val, setVal] = useState(0);
    const incrementVal = () => {
        setVal(val + 1);
    }
    const decrementVal = () => {
        if (val > 0) {
            setVal(val - 1);
        }
        else{
            setVal(0);
        }
    }
    return (<>
    <ThemeProvider theme={customtheme}>
        <div className='main_div'>
            <div className='center_div'>
                <h1>{val}</h1>
                <div className='btn_div'>
                    <Button variant='contained' color='secondary' onClick={incrementVal} size='large'>Increment</Button>
                    <Button variant='contained' color='info' onClick={decrementVal} size='large'>Decrement</Button>
                </div>
            </div>
        </div>
        </ThemeProvider>
    </>)
}
export default Hook;