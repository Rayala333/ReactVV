import React,{useState} from 'react';
import Image from '../Images/image.jpg'

const Home = () => {


  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const hobbies = [
    { id: 1, name: 'Reading' },
    { id: 2, name: 'Cooking' },
    { id: 3, name: 'Gardening' },
    // Add more hobbies as needed
  ];

  const handleHobbyChange = (event) => {
    const { value } = event.target;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedHobbies([...selectedHobbies, value]);
    } else {
      setSelectedHobbies(selectedHobbies.filter(hobby => hobby !== value));
    }
  };



  return (
    <div className='row'>
      <div className='col'>
        <img src={Image} alt='myimage' />
      </div>
      <div className='col mt-5'>
        <label>Select Hobbies:</label>
        <select multiple value={selectedHobbies} onChange={handleHobbyChange}>
          {hobbies.map(hobby => (
            <option key={hobby.id} value={hobby.name}>
              {hobby.name}
            </option>
          ))}
        </select>

      </div>
    </div>

  )
}

export default Home