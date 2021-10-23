import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Grid, Input ,Button} from 'semantic-ui-react'
import { fetchUserById } from '../thunks'





function Login() {
    const [state, setstate] = useState("");
    const dispatch = useDispatch();
    const history=useHistory();

    const handleChange=(event)=>{
        setstate(event.target.value);
    }

    const handleClick=()=>{
     
        dispatch(fetchUserById(state)).then(data=>{
          debugger;
          if(data.error){
            alert("User Not Found");

          }
          else{
            history.push("/home");
          }

            // Check whether your request is succesfful or not

      
            
      

        }).catch(err=>{
           
          
        })

    }
    return (
        <Grid  style={{marginTop:"220px"}}>
  
 

    <Grid.Row>
      
      <Grid.Column width={10}>


      <Grid  >
 

 <Grid.Row style={{marginLeft:"200px"}}> 
 <h1>Please Login</h1>
   
   <Grid.Column width={8} >
   <Input fluid  placeholder='Username' onChange={handleChange} />

   </Grid.Column>
   <Grid.Column width={2}>

   <Button content='Login' primary  onClick={handleClick}/>

   </Grid.Column>

   

 </Grid.Row>
</Grid>
     

      </Grid.Column>
   
    </Grid.Row>
  </Grid>
)
}

export default Login
