const getMonthDays = () => {
  const date = new Date();
  const month = date.getMonth();
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let daysArray = [];
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(new Date(year, month, i));
  }

  return daysArray;
};

export const Calendar = () => {
  console.log(getMonthDays());
  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 p-4 gap-4">
        <div className="col-span-2">
          <div className="grid grid-cols-7">
            {getMonthDays().map((day, index) => {
              const dayName = day.toString().split(" ")[0];
              const dayNumber = day.toString().split(" ")[2];
              return (
                <div className="glass glass-blur" key={day.toString()}>
                  <p>{dayName}</p>
                  <p>{dayNumber}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="glass glass-blur col-span-1">
            <p>Events</p>
          </div>
        </div>
      </div>
    </div>
  );
};
