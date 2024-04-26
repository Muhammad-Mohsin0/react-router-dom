import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = (props) =>{
    const {Component} =props
    const navigate =useNavigate()
//   let auth = {'token' :false}
useEffect(()=>{
    let Login =localStorage.getItem('LoginPage')
    if (Login==="false")
    navigate('/LoginPage')
})

  return (
      <div> 
       <Component/>
       {/* auth.token ? <Outlet/> : <Navigate to={"/OnlinePage"} /> */}
      </div>
)

}
export default ProtectedRoutes;