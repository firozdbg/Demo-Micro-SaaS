import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase } from 'firebase/database';
// import {app} from '../firebase.js'; // Adjust the import based on your firebase configuration
function AddStudent() {
  // const navigate = useNavigate();
  // const db = getDatabase(app); // Initialize the database
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [course, setCourse] = React.useState('');
  const [image, setImage] = React.useState(null);

  // const studentRegistration = (e) => {
  //   e.preventDefault();
  //   console.log(name, email, course, image);
  // }
  return (
 

    <div className="min-h-screen flex flex-col bg-yellow-300 m-4">
      {/* Header */}
      <header className="text-black bg-amber-200 h-15 flex items-center">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Demo Micro SaaS Tuition Center</h1>
        </div>
      </header>

      {/* Add Student Form */}
      <main className="flex-1 flex items-center justify-center">
        <form onSubmit={studentRegistration} className="bg-white rounded-lg shadow-md p-8 w-full max-w-md h-auto ">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Add Student</h2>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="name" name="name" placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}/>
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" id="email" name="email" placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
         
          <div className="mb-6 text-left">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="course">Course</label>
            <input className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="course" name="course" placeholder="Enter course"
            onChange={(e) => setCourse(e.target.value)}/>
          </div>

           <div className="mb-6 text-left  ">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="image">Image</label>
            <input accept='image/*' className=" flex bg-teal-600 w-full h-10 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="file" id="image" name="image" placeholder="select image"
            onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <button type="submit" className="w-full py-2 h-12 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-semibold hover:cursor-pointer">Add Student</button>
        </form>
      </main>

      {/* Footer */}
     
    </div>
  );
}

export default AddStudent;