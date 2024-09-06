import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [userInput , setUserInput] = useState({
    username : '',
    password : '',
    isInvalid : false,
  })
  const handleChange=(event,type)=>{
    if(type == 'username'){
      setUserInput({...userInput,
        username : event.target.value
      })
    }
    else{
      setUserInput({...userInput,
        password : event.target.value
      })
    }
  }
  const handleLogin=()=>{

  }
  
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      
      <form className='px-24 py-8 border-2 border-gray-200 shadow-md rounded-xl flex flex-col gap-4'>
        <div>
          {userInput.isInvalid&&<p className='text-red-600 mb-1'>username or password invalid</p>}
        <label>username : <input type='text' className='border rounded-md '
                          onChange={(e)=>handleChange(e,username)}
                          /></label>
        </div>
        <label>password : <input type='text' className='border rounded-md ml-0.5'
                          onChange={(e)=>handleChange(e,password)}
                          /></label>
        <button className='bg-blue-500 text-white py-1 rounded-3xl w-40 mx-auto'
                          onSubmit={handleLogin}
                          >Log In</button>
        <div>If you don't have account please <Link to='/register' className='text-blue-400 underline'>Register</Link>
        </div>
      </form>

    </div>
  )
}