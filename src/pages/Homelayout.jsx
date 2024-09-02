import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/Navbar"
const Homelayout = () => {
  const isLoading = useNavigation().state == "loading" ? true:false;
  return (
    <div>
      <Navbar></Navbar>
      <section className="page">
        {isLoading?<div className="loading"></div>:<Outlet/>}
      </section>
    </div>
  )
}

export default Homelayout
