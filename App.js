import React, { useState } from 'react';
import Id from './Components/Id';
import Name from './Components/Name';
import Mail from './Components/Mail';
import Salary from './Components/Salary';
import Dept from './Components/Dept';
import { createEmployee } from './employeeService'; // Ensure this function exists and returns a Promise

function App() {
  const [employee, setEmployee] = useState({
    name: '',
    mail: '',
    salary: '',
    dept: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting Employee Data:', employee);

    try {
      const res = await createEmployee(employee);
      console.log('Employee created successfully:', res.data);
      alert('Employee created successfully!');
      setEmployee({  name: '', mail: '', salary: '', dept: '' });
    } catch (err) {
      console.error('Error creating employee:', err);
      alert('Failed to create employee.'+err);
    }
  };

  return (
    <div className="form-container">
      <h2>Employee Form</h2>
      <form onSubmit={handleSubmit}>
        <Name name="name" value={employee.name} onChange={handleChange} />
        <Mail name="mail" value={employee.mail} onChange={handleChange} />
        <Salary name="salary" value={employee.salary} onChange={handleChange} />
        <Dept name="dept" value={employee.dept} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
