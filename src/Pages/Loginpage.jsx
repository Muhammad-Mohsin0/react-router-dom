import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LogInPage(){

    const login =()=>{
      localStorage.setItem('LoginPage', true)
      navigate('/')
    }
    const navigate = useNavigate()
    useEffect(()=>{
        let Login = localStorage.getItem('LoginPage')
        if(!Login)
        navigate('/')
    })
    return(
        <div className="flex  justify-center ">
        <div className="w-[76%] shadow-lg">

        <h1 className="m-3 font-bold">Login page</h1><br />
           <input type="text" placeholder="username" className=" border rounded border-solid m-3 py-1 px-2"/>
        <br />
           <input type="password" placeholder="password"  className="border rounded border-solid m-3 py-1 px-2"/>
        <br /><br />
           <button className="bg-gray-300 py-1 px-2 border border-solid rounded text-white bg-green-700 m-3" onClick={login}>signin</button>
           </div>
        </div>
    )
}
export default LogInPage;