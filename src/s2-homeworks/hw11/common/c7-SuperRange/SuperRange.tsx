import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                color:'#00CC22',
                margin: '0 12px',
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: '#fff',
                    border: '1px solid currentColor',
                },

                '& .MuiSlider-rail': {
                    color: '#d8d8d8',
                    opacity:  1,
                    height: 4,
                },





                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}


export default SuperRange



