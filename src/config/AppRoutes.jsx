import { Route, Routes } from 'react-router-dom';
import EmployeeList from '../components/team/EmployeeList';
import AllTeams from '../components/team/AllTeams';
const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<EmployeeList />} />
        <Route path="/teams" element={<AllTeams />} />
    </Routes>
  )
}

export default AppRoutes