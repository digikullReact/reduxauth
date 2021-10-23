import React from 'react'
import { useDispatch } from 'react-redux'
import { show } from '../reducers/authentication'






function Footer() {
    const dispatch = useDispatch()


    const  handleClick=()=>{

        dispatch(show(true));

    }
    return (
        <div>

            <button onClick={handleClick}>
                Change Home Modal
            </button>
            
        </div>
    )
}

export default Footer
