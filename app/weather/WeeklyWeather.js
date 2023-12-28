export const WeeklyWeather = ({ weather, weekday, index }) => {
  return (
    <div className="grid grid-cols-4 glass glass-blur">
      <div>
        <p>{weekday}</p>
        <p>{weather?.daily.time[index]}</p>
      </div>
    </div>
  );
};
