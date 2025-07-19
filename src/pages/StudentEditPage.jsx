import { useNavigate, useParams } from 'react-router-dom';
import { getStudentById, updateStudent } from '../api/studentApi'; // Adjust the import based on your API setup
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
function StudentEditPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [oldData, setOldData] = useState({});
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
// console.log(data)
  React.useEffect(() => {
    async function fetchStudent() {
      try {
        const {data} = await getStudentById(id);
        if (data) {
          setValue('name', data.name);
          setValue('email', data.email);
          setValue('course', data.course);
        }
        console.log(data);
        setOldData(data);
        reset(data);
      } catch (error) {
        console.error('Failed to fetch student:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchStudent();
  }, [id, setValue]);
  

 

  
  
  const studentRegistration = async (data) => {

    // Prepare student data
  const studentData = {
    name: data.name,
    email: data.email,
    course: data.course,
    profileImageUrl: oldData.profileImageUrl, // Keep the old image URL if not changed
  };
    try {
      await updateStudent(id, studentData);
      setSuccess(true);
      // Optionally, navigate or reset
     setTimeout(() => {
        navigate(`/`);
      }, 1000);
    } catch (error) {
      alert('Failed to update student');
      console.error(error);
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-yellow-100 m-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 m-4">
      {/* Header */}
      <header className="text-black bg-amber-100 h-15 flex items-center">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href='/' className="text-2xl font-bold text-blue-600">Demo Micro SaaS Tuition Center</a>
        </div>
      </header>

      {/* Edit Student Form */}
      <main className="flex-1 flex items-center justify-center">
        <form onSubmit={handleSubmit(studentRegistration)} className="bg-gray-150 rounded-lg shadow-md p-8 w-full max-w-md h-auto ">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Edit Student</h2>
          {success && <div className="mb-4 text-green-600 font-semibold">Student updated successfully!</div>}
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="name">Name</label>
            <input {...register('name', { required: 'Name is required' })} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="name" name="name" placeholder="Enter name" />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className="mb-4 text-left">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="email">Email</label>
            <input {...register('email', { required: 'Email is required', pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: 'Invalid email address' } })} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="email" id="email" name="email" placeholder="Enter email" />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-6 text-left">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="course">Course</label>
            <input {...register('course', { required: 'Course is required' })} className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="text" id="course" name="course" placeholder="Enter course" />
            {errors.course && <span className="text-red-500 text-sm">{errors.course.message}</span>}
          </div>
          <button type="submit" className="w-full py-2 h-12 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-semibold hover:cursor-pointer">Update Student</button>
        </form>
      </main>

      {/* Footer */}
    </div>
  );

}
export default StudentEditPage;