import React, { useState } from 'react';
import { useContext } from 'react';
import { formContext } from '../context/context';

function Form(props) {

  const [form,setForm] = useContext(formContext)
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [seats, setSeats] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const parsedValue = type === 'number' ? parseInt(value) : value;

    if (name === 'name') {
      setName(parsedValue);
    } else if (name === 'date') {
      setDate(parsedValue);
    } else if (name === 'seats') {
      setSeats(parsedValue);
    }
  };

    const movie = props.name;
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { movie,name, date, seats };
    localStorage.setItem('formData', JSON.stringify(formData));
    setIsSubmitted(true);
    setForm(false)
  };

  if (isSubmitted) {
    return null; 
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center text-gray-900 bg-gray-400 bg-opacity-75">
      <div className="p-4 bg-white rounded-md shadow-lg ">
            <button onClick={()=>setForm(false)} className='ml-60'>❌</button>
        <h5 className="text-xl font-bold text-gray-900">{props.name}</h5>
        <form onSubmit={handleSubmit}>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
              required
              name="name"
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mt-6">
            <label  className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={handleChange}
              required
              name="date"
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700">
              Number of Seats
            </label>
            <input
              type="number"
              min="1"
              value={seats}
              onChange={handleChange}
              required
              name="seats"
              className="w-full px-3 py-2 mt-1 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
