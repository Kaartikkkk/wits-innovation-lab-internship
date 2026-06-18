function TemperatureInput({ celsius, setCelsius }) {
  return (
    <div>
      <label>Celsius</label>
      <input
        type="number"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Enter Temperature"
      />
    </div>
  );
}

export default TemperatureInput;
