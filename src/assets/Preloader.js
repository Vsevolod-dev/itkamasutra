import React from 'react'
import load from './Infinity-1s-71px.svg'

const Preloader = props => {
    return <>
        {props.isFetching ?
            <img src={load} alt={''}/> : ""
             }
    </>
}

export default Preloader