import React, { useState } from 'react';


const Settings = ({setCurrentPage}) => {

const weather = []
  const weatherCity = 'Tampa';
  const weatherApi = '57d454440cf91b5aeae1124affbb74e7';


  const [newCity, setNewCity] = useState(weatherCity);
  const [newApiKey, setNewApiKey] = useState(weatherApi)


  const handleCityChange = (e) => {
    setNewCity(e.target.value);
  };

  const handleCityApi = (e) => {
    setNewApiKey(e.target.value);
  };

  

  const handleSave = () => {
    // updateWeatherCity(newCity);
    // updateWeatherApi(newApiKey);
    setCurrentPage('Board');
  };

  return (
    <section className='section'>
      <button className='settings__save-btn' onClick={handleSave}>Save</button>

      <div className='settings__conteiner'>
        <div className='settings__block'>
          <h3>Weather</h3>
          <div className='settings__item'>
            <label className='settings__item-label'>Weather City:</label>
            <input type="text" value={newCity} onChange={handleCityChange} />
          </div>
          <div className='settings__item'>
            <label className='settings__item-label' placeholder={newApiKey}>Weather Api:</label>
            <input type="text" value={newApiKey} onChange={handleCityApi} />
          </div>
        </div>
        <div className='settings__block'>
          <h3>Other</h3>
          <div className='settings__item'>
            <label className='settings__item-label'>Color:</label>
            <input type="text"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Settings