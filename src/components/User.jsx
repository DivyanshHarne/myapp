import React from 'react'
import{useNavigate} from 'react-router-dom'
import About from './About';

const User = () => {

    const navigation = useNavigate(); // useNavigate takes you to desire location on any event.

  return (
    <div className='user'>
        <button onClick={()=>{navigation("/about")}}> Click here!!</button>

    </div>
  )
}

export default User