import NavberCompo from "../components/NavberCompo"
const Layout = ({children}) => {
  return (
    <>
     <NavberCompo/>
     {children}
    </>
  )
}

export default Layout