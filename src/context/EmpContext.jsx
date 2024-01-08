import { createContext, useState, useEffect } from 'react';
import { getEmployees } from '../shared/api/emp';
import {teamListData} from '../shared/data/team';

const EmpContext = createContext({});

export const EmpDataProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedTeamToAdd, setSelectedTeamToAdd] = useState('Sales');
  const [teamList, setTeamList]=useState(teamListData);

  const handleTeamSelection=(event)=>{
    setSelectedTeamToAdd(event.target.value);
  }
  const addToTeam=(id)=> {
    const transformedEmployees = employees.map((emp) => emp.id === id
      ? emp.domain === selectedTeamToAdd ? { ...emp }
        : { ...emp, domain: selectedTeamToAdd } : emp);
    setEmployees(transformedEmployees);
  }

  useEffect(() => {
    (async function(){
      const {data}=await getEmployees();
      setEmployees(data);
    }());
    return () => {
      setEmployees([]);
    }
  }, []);

  
  return (
    <EmpContext.Provider 
      value={{
        employees, 
        selectedTeamToAdd,
        setSelectedTeamToAdd,
        handleTeamSelection, 
        addToTeam,
        teamList
      }}>
      {children}
    </EmpContext.Provider>
  )
};

export default EmpContext;