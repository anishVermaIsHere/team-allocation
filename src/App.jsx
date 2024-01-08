import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import EmployeeList from './components/team/EmployeeList';
import Navbar from './components/Navbar';
import { EmpDataProvider } from './context/EmpContext';
import AppRoutes from './config/AppRoutes';

function App() {
  return (
    <>
      <EmpDataProvider>
          <Navbar />
          <main>
            <Router>
              {AppRoutes()}
            </Router>
          </main>
      </EmpDataProvider>
    </>
  )
}

export default App
