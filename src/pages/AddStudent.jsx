import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDatabase } from 'firebase/database';
import { storage } from '../firebase.js'; // Adjust the import based on your firebase configuration
import { useForm } from 'react-hook-form';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
function AddStudent() {
  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState("");
  const [success, setSuccess] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

  const imageFile = watch('image')?.[0];
  console.log(imageFile);
  const handleUpload = async (file) => {
    if (!file) return alert("No image selected");
    const imageRef = ref(storage, `images/${uuidv4()}-${file.name}`);
    try {
      await uploadBytes(imageRef, file);
      const downloadURL = await getDownloadURL(imageRef);
      setImageURL(downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
      return null;
    }
  };
console.log(imageURL);
  const studentRegistration = async (data) => {
    let uploadedImageURL = "";
    if (data.image && data.image[0]) {
      uploadedImageURL = await handleUpload(data.image[0]);
    }

    // console.log(data.image[0]);
    // console.log({ ...data, imageURL: uploadedImageURL });

    // Here you can handle the rest of the registration logic
    setSuccess(true);
    reset();
    // Optionally, navigate or do more here
    
  };

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
        <form onSubmit={handleSubmit(studentRegistration)} className="bg-white rounded-lg shadow-md p-8 w-full max-w-md h-auto ">
          <h2 className="text-2xl font-bold mb-6 text-blue-600">Add Student</h2>
          {success && <div className="mb-4 text-green-600 font-semibold">Student added successfully!</div>}
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
          <div className="mb-6 text-left">
            <label className="block mb-2 text-gray-700 font-medium" htmlFor="image">Image</label>
            <input {...register('image')} accept='image/*' className="flex bg-teal-600 w-full h-10 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" type="file" id="image" name="image" placeholder="select image" />
          </div>
          <button type="submit" className="w-full py-2 h-12 bg-blue-500 text-white rounded hover:bg-blue-600 transition font-semibold hover:cursor-pointer">Add Student</button>
        </form>
      </main>

      {/* Footer */}
     
    </div>
  );
}

export default AddStudent;