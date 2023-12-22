import { GoSun } from "react-icons/go";
import { MdSunny, MdCloudySnowing } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaTemperatureHigh, FaTemperatureLow } from "react-icons/fa";
import { GiSunRadiations } from "react-icons/gi";

export const DailyWeatherInfo = ({ dailyWeather }) => {
  return (
    <div className="grid grid-cols-2 gap-2 pl-[10%]">
      <div className="flex flex-row gap-2">
        <MdSunny color="yellow" className="w-5 h-5" />
        <p>{dailyWeather?.sunrise[0].split("T")[1]}</p>
      </div>

      <div className="flex flex-row gap-2">
        <BsFillMoonStarsFill color="white" className="w-5 h-5" />
        <p>{dailyWeather?.sunset[0].split("T")[1]}</p>
      </div>

      <div className="flex flex-row gap-2 pl-1">
        <FaTemperatureHigh color="orange" className="w-5 h-5" />
        <p>
          {dailyWeather?.temperature_2m_max[0]}
          {"°C"}
        </p>
      </div>

      <div className="flex flex-row gap-2 pl-1">
        <FaTemperatureLow color="lightblue" className="w-5 h-5" />
        <p>
          {dailyWeather?.temperature_2m_min[0]}
          {"°C"}
        </p>
      </div>

      <div className="flex flex-row gap-2">
        <GiSunRadiations color="red" className="w-5 h-5" />
        <p>
          {dailyWeather?.uv_index_max[0]}
          {" UV"}
        </p>
      </div>

      <div className="flex flex-row gap-2">
        <MdCloudySnowing color="white" className="w-5 h-5" />
        <p>
          {dailyWeather?.precipitation_sum[0]}
          {" mm"}
        </p>
      </div>
    </div>
  );
};
