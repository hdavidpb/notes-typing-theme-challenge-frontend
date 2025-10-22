
import { Outlet } from 'react-router'
import { Sidebar } from '../components/Sidebar'
import { CustomNavbar } from '../components/CustomNavbar'

const AppLayout = () => {
  return (
     <main className="w-full flex justify-start items-stretch">
      <Sidebar />
      <div className="flex-1 flex flex-col justify-start items-center">
        <CustomNavbar/>
        <Outlet />
      </div>
    </main>
  )
}

export default AppLayout