import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      alert("Please check it");
      return;
    }

    if (isSelected === "") {
      alert("Please select an option");
      return;
    }

    console.log(formData.username);
    console.log(formData.password);
    console.log(formData.email);
    console.log(isSelected);
      console.log(isChecked);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Registration Form
        </h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition"
          />
        </div>
         <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                       outline-none focus:ring-2 focus:ring-blue-500 
                       focus:border-blue-500 transition"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <select
            value={isSelected}
            onChange={(e) => setIsSelected(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg
                       bg-white outline-none focus:ring-2 
                       focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="">Select department</option>
            <option value="Software engineering">
              Software Engineering
            </option>
            <option value="Computer science">
              Computer Science
            </option>
          </select>
        </div>
        <div className="flex items-center mb-6">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded 
                       focus:ring-blue-500"
          />

          <label className="ml-2 text-sm text-gray-600">
            I agree to the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg 
                     font-semibold hover:bg-blue-700 
                     focus:ring-4 focus:ring-blue-300 
                     transition duration-200"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default App;