import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [error, setError] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      if (countryCode.length === 2) {
        const fetchFunc = async () => {
        const response = await fetch(`https://disease.sh/v3/covid-19/countries/${countryCode}`);
        const data = await response.json();
        setError(response.ok)
        setData(data);
      }

      fetchFunc()       
  }
    }, 700);
  }, [countryCode]);

  const handeInputValue = (e) => {
    setCountryCode(e.target.value);
  }

  console.log(data);

  return (
    <div className="cont">
        <form>
          <h2>Country form</h2>

          <input type="text" placeholder='Enter country code' value={countryCode} id="SearcheInput" onChange={handeInputValue} />

          <p>died in {data.country}: {data.deaths}</p>

          <p className='errorText' style={{display: error ? 'none' : 'block'}}>there is no such country code</p>
        </form>
    </div>
  );
}

export default App;
