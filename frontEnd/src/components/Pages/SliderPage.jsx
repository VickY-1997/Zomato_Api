import { useEffect, useState } from "react"
import axios from 'axios'

const apiUrl = 'https://zomato-api-4te8.onrender.com/api/zomapp/location'

const SliderPage = () => {

const [location, setLocation] = useState("")

useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl);
          console.log("API Response:", response);
          // ... rest of your code
        } catch (error) {
          console.error("Axios fetch error:", error);
        }
      };
      fetchData();
  }, []);


console.log(location)
  return (
    <>
    
        <div id="search">
            <div className="logo">
                <span>Z!</span>
            </div>
            <div id="heading">
                Find Best Place Near You
            </div>
            <div className="dropdown">
                <select>
                    <option>---SELECT YOUR CITY---</option>
                     <option>Delhi</option>
                </select>
                <select id="restSelect">
                    <option>---SELECT YOUR RESTAURANTS---</option>
                </select>
            </div>
        </div>
    </>
  )
}

export default SliderPage
