import { useState } from "react";
const GameForm = () => {
  const [formData, setFormData] = useState([{}])

  const options = ["Action", "Adventure", "Puzzle", "Shooter"]
  const handleChange = (e) => {
    const value = e.target.value
    const checked = e.target.checked

    checked ? setFormData([...formData, value]) : setFormData(formData.filter((option) => option !== value))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO check that fields have been filled out.
  }
  return ( <>
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-2">Choose Categories</h3>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label key={option} className='inline-flex itmes-center space-x-2'>
            <input
              type="checkbox"
              value={option}
              checked={formData.includes(option)}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </form>
  </> );
}

export default GameForm;
