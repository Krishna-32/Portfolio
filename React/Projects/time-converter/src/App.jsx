import React, {useState, useEffect} from "react"

function App() {

  const [input, setInput] = useState(0);
  const [result, setResult] = useState(0);
  const [fromValue, setFromValue] = useState('sec');
  const [toValue, setToValue] = useState('min');

  useEffect(() => {
    function conversion(){
      
      let convertedValue = input;

      // Convert from seconds to other units
    if (fromValue === 'sec') {
      if (toValue === 'sec') {
        // No conversion needed
      } else if (toValue === 'min') {
        convertedValue = input / 60;
      } else if (toValue === 'hour') {
        convertedValue = input / 3600;
      } else if (toValue === 'day') { 
        convertedValue = input / 86400;
      } else if (toValue === 'week') {
        convertedValue = input / 604800;
      } else if (toValue === 'month') {
        convertedValue = input / 2628000;
      } else if (toValue === 'year') {
        convertedValue = input / 31536000;
      }
    }
    // Convert from minutes to other units
    else if (fromValue === 'min') {
      if (toValue === 'sec') {
        convertedValue = input * 60;
      } else if (toValue === 'min') {
        // No conversion needed
      } else if (toValue === 'hour') {
        convertedValue = input / 60;
      } else if (toValue === 'day') {
        convertedValue = input / 1440;
      } else if (toValue === 'week') {
        convertedValue = input / 10080;
      } else if (toValue === 'month') {
        convertedValue = input / 43800;
      } else if (toValue === 'year') {
        convertedValue = input / 525600;
      }
    }
    // Convert from hours to other units
    else if (fromValue === 'hour') {
      if (toValue === 'sec') {
        convertedValue = input * 3600;
      } else if (toValue === 'min') {
        convertedValue = input * 60;
      } else if (toValue === 'hour') {
        // No conversion needed
      } else if (toValue === 'day') {
        convertedValue = input / 24;
      } else if (toValue === 'week') {
        convertedValue = input / 168;
      } else if (toValue === 'month') {
        convertedValue = input / 730;
      } else if (toValue === 'year') {
        convertedValue = input / 8760;
      }
    }
    // Convert from days to other units
    else if (fromValue === 'day') {
      if (toValue === 'sec') {
        convertedValue = input * 86400;
      } else if (toValue === 'min') {
        convertedValue = input * 1440;
      } else if (toValue === 'hour') {
        convertedValue = input * 24;
      } else if (toValue === 'day') {
        // No conversion needed
      } else if (toValue === 'week') {
        convertedValue = input / 7;
      } else if (toValue === 'month') {
        convertedValue = input / 30.44;
      } else if (toValue === 'year') {
        convertedValue = input / 365;
      }
    }
    // Convert from weeks to other units
    else if (fromValue === 'week') {
      if (toValue === 'sec') {
        convertedValue = input * 604800;
      } else if (toValue === 'min') {
        convertedValue = input * 10080;
      } else if (toValue === 'hour') {
        convertedValue = input * 168;
      } else if (toValue === 'day') {
        convertedValue = input * 7;
      } else if (toValue === 'week') {
        // No conversion needed
      } else if (toValue === 'month') {
        convertedValue = input / 4.345;
      } else if (toValue === 'year') {
        convertedValue = input / 52.143;
      }
    }
    // Convert from months to other units
    else if (fromValue === 'month') {
      if (toValue === 'sec') {
        convertedValue = input * 2628000;
      } else if (toValue === 'min') {
        convertedValue = input * 43800;
      } else if (toValue === 'hour') {
        convertedValue = input * 730;
      } else if (toValue === 'day') {
        convertedValue = input * 30.44;
      } else if (toValue === 'week') {
        convertedValue = input * 4.345;
      } else if (toValue === 'month') {
        // No conversion needed
      } else if (toValue === 'year') {
        convertedValue = input / 12;
      }
    }
    // Convert from years to other units
    else if (fromValue === 'year') {
      if (toValue === 'sec') {
        convertedValue = input * 31536000;
      } else if (toValue === 'min') {
        convertedValue = input * 525600;
      } else if (toValue === 'hour') {
        convertedValue = input * 8760;
      } else if (toValue === 'day') {
        convertedValue = input * 365;
      } else if (toValue === 'week') {
        convertedValue = input * 52.143;
      } else if (toValue === 'month') {
        convertedValue = input * 12;
      } else if (toValue === 'year') {
        // No conversion needed
      }
    }

      setResult(convertedValue)
    }

    conversion();
  },[input, fromValue, toValue])

  function handleValueChange(e){
    setInput(e.target.value);
  }

  function handleFromValueChange(e){
    setFromValue(e.target.value)
  }

  function handleToValueChange(e){
    setToValue(e.target.value)
  }

  return (
    <>
      <div className="container">
        <h1>Time Converter</h1>

        <div className="options">
          <label htmlFor="option">From : </label>
          <select name="option" id="option" value={fromValue} onChange={handleFromValueChange}>
            <option value="sec">Second(s)</option>
            <option value="min">Minute(s)</option>
            <option value="hour">Hour(s)</option>
            <option value="day">Day(s)</option>
            <option value="week">Week(s)</option>
            <option value="month">Month(s)</option>
            <option value="year">Year(s)</option>
          </select>
          <br /><br />
          <input type="number" value={input} onChange={handleValueChange}/>
          <br /><br />

          <label htmlFor="option2">To : </label>
          <select name="option2" id="option2" value={toValue} onChange={handleToValueChange}>
            <option value="sec">Second(s)</option>
            <option value="min">Minute(s)</option>
            <option value="hour">Hour(s)</option>
            <option value="day">Day(s)</option>
            <option value="week">Week(s)</option>
            <option value="month">Month(s)</option>
            <option value="year">Year(s)</option>
          </select>
          <br /><br />
          <input type="number" value={result} readOnly/>
        </div>      
      </div>
    </>
  )
}

export default App
