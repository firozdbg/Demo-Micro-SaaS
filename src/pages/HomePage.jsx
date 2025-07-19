import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

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
              {/* Example row, replace with dynamic data */}
              <tr className='h-14'>
                <td >1</td>
                <td >
                  <img src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt="Student" className="w-12 h-12 rounded-full" />
                </td>
                <td >John Doe</td>
                <td>Cse</td>
                <td >
                  <ul className='flex gap-2 hover:cursor-pointer text-teal-900'>
                    <li onClick={studentDetails}>view</li>
                    <li onClick={editStudent}>edit</li>
                    <li onClick={deleteStudent}>delete</li>
                 </ul>
                </td>
              </tr>

             

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