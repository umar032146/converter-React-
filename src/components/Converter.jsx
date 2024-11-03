import React, { useState } from 'react';
import "./Converter.css"
const conversionRates = {
  Weight: {
    Metric: { kg: 1, g: 1000 },
    US: { lb: 2.20462, oz: 35.274 },
    UK: { st: 0.157473, lb: 2.20462 },
  },
  Length: {
    Metric: { m: 1, cm: 100, km: 0.001 },
    US: { in: 39.3701, ft: 3.28084, yd: 1.09361, mi: 0.000621371 },
    UK: { in: 39.3701, ft: 3.28084, yd: 1.09361, mi: 0.000621371 },
  },
  Liquid: {
    Metric: { L: 1, mL: 1000 },
    US: { fl_oz: 33.814, cup: 4.22675, pint: 2.11338, gallon: 0.264172 },
    UK: { fl_oz: 35.1951, pint: 1.75975, gallon: 0.219969 },
  },
};

function Converter() {
  const [inputValue, setInputValue] = useState(0);
  const [fromUnit, setFromUnit] = useState("Metric");
  const [toUnit, setToUnit] = useState("Metric");
  const [convertedValue, setConvertedValue] = useState(0);
  const [type, setType] = useState("Weight");
  const [imperialSystem, setImperialSystem] = useState("US");

  const units = {
    ...conversionRates[type][imperialSystem],
    ...conversionRates[type].Metric,
  };

  const handleConversion = (e) => {
    e.preventDefault();
    const baseValue = inputValue / units[fromUnit];
    const result = baseValue * units[toUnit];
    setConvertedValue(result);
  };

  return (
    <form onSubmit={handleConversion}>
      <div className="tabs">
        {["Weight", "Length", "Liquid"].map((tab) => (
          <button
            type="button"
            key={tab}
            onClick={() => setType(tab)}
            className={type === tab ? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="imperial-toggle">
        <label>
          <input
            type="radio"
            value="US"
            checked={imperialSystem === "US"}
            onChange={() => setImperialSystem("US")}
          />
          US Imperial
        </label>
        <label>
          <input
            type="radio"
            value="UK"
            checked={imperialSystem === "UK"}
            onChange={() => setImperialSystem("UK")}
          />
          UK Imperial
        </label>
      </div>

      <div className="converter">
        <input
        className='valueadd'
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={`Enter ${fromUnit}`}
        />
        <select onChange={(e) => setFromUnit(e.target.value)} value={fromUnit}>
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <span>to</span>
        <select onChange={(e) => setToUnit(e.target.value)} value={toUnit}>
          {Object.keys(units).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <button type="submit">Convert</button>
      </div>
      <h3>Converted Value: {convertedValue.toFixed(2)} {toUnit}</h3>
    </form>
  );
}

export default Converter;
