import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../api/studentApi'

function HomePage() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getStudents()
      .then((res) => {
        console.log("Fetched Students:", res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);

  const addStudent = () => {
    // Logic to add a student can be implemented here
    navigate('/add-student');
  }

   const editStudent = () => {
    // Logic to edit a student can be implemented here
    navigate('/student/1/edit');
  }

   const deleteStudent = () => {
    // Logic to delete a student can be implemented here
  
  }

const studentDetails = () => {
    // Logic to view student details can be implemented here
    navigate('/student/1');
  }

  return (<div className="min-h-screen flex flex-col bg-yellow-300 m-4">
      {/* Header */}
      <header className="text-black bg-amber-200 h-15 flex items-center">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Demo Micro SaaS Tuition Center</h1>
          <nav>
            <ul className="flex space-x-6 gap-4 ml-2">
              <li><a href="/" className=" text-blue-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className=" text-blue-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className=" text-blue-600 hover:text-blue-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col  items-center bg-amber-950 justify-start m-8">
      <h1 className="text-white text-3xl mt-4">Student Dashboard</h1>
      
      <div className="w-full p-4 text-xl bg-green-500 h-auto flex flex-col items-center ">
        <div className='w-3/4 h-15 flex items-center justify-end '>
         <h1 onClick={addStudent} className='bg-blue-500 h-10 w-55 flex items-center justify-center hover:cursor-pointer' >Add Student</h1>
        </div>
         <div className='w-3/4 bg-amber-200  h-auto flex items-center '>
          <table className='w-full text-left border-collapse'>
            <thead className="bg-gray-200 w-full" >
              <tr className='h-11'>
                <th >ID</th>
                <th >Photo</th>
                <th >Name</th>
                <th >Course</th>
                <th >Actions</th>
              </tr>
            </thead>
            <tbody>
            {Array.isArray(students) && students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td> <img
                  src={student.profileImageUrl}
                  alt={student.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                </td>
                <td>{student.name}</td>
                <td>{student.course}</td>
                <td>
                  <button onClick={() => handleEditStudent(student.id)}>Edit</button>
                  <button onClick={() => handleDeleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
       
        
         

      </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 py-4 text-center">
        &copy; {new Date().getFullYear()} MyHomePage. All rights reserved.
      </footer>
    </div>

  );
}

export default HomePage;