import React from 'react';
import { Button } from '@mui/material';

const Cardp = (props) => {
    return (<>

        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} alt='pic' className='card_img' />
                <div className='card_info'>
                    <span className='card_category'>{props.title}</span>
                    <h3 className='card_title'>{props.sname}</h3>
                    <Button size='medium' color='primary' variant='contained' href={props.link}>Watch Now</Button>
                </div>
            </div>
        </div>
    </>)
};
export default Cardp;