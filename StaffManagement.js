import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StaffManagement = () => {
  const [staff, setStaff] = useState([]);
  const [formData, setFormData] = useState({
    staffNumber: '',
    fullName: '',
    identityNumber: '',
    qualifications: '',
    position: '',
    salary: ''
  });

   const fetchStaff = async () => {
    try {
      const res = await axios.get('http://localhost:4000/staff');
      setStaff(res.data); // Set the staff data to state
    } catch (err) {
      console.error('Error fetching staff data:', err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/staff', formData);
    fetchStaff();
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="staff-management">
      <h2>Staff Management</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Input fields for staff data */}
        <input name="staffNumber" placeholder="Staff Number" onChange={handleChange} required />
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input name="identityNumber" placeholder="Identity Number" onChange={handleChange} required />
        <input name="qualifications" placeholder="Qualifications" onChange={handleChange} required />
        <input name="position" placeholder="Position" onChange={handleChange} required />
        <input name="salary" placeholder="Salary" onChange={handleChange} required />
        <button type="submit">Add Staff</button>
      </form>

      <ul className="staff-list">
        {staff.map((s) => (
          <li key={s._id}>{s.fullName} - {s.position}</li>
        ))}
      </ul>
    </div>
  );
};

export default StaffManagement;
