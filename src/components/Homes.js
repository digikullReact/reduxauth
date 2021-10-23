import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { fetchUser } from '../thunks';
import Footer from './Footer';




function Homes() {
    const dispatch=useDispatch();
    const [state2, setstate2] = useState([])
    const state=useSelector(state=>state.auth);

    useEffect(() => {
        dispatch(fetchUser(state2));
       
    }, [])

 
    return (
        <div>
            <h1>Home Component</h1>
            {
                state.allUsers.map(ele=>(
                    <li>{ele.firstName}</li>

                ))
            }

{
    state.showModal?<h1>Modal</h1>   :""
}
         


         <Footer/>
        </div>
    )
}

export default Homes
