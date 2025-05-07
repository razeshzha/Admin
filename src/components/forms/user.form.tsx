import React, { useState } from 'react';

interface UserFormData {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
}

const UserForm = () => {
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    email: '',
    password: '',
    role: 'user'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Create user:', formData);
    // createUser(formData); // Optional
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow max-w-md mx-auto">
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <select
        name="role"
        className="w-full border border-gray-300 rounded-md px-4 py-2"
        value={formData.role}
        onChange={handleChange}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Create User
      </button>
    </form>
  );
};

export default UserForm;
