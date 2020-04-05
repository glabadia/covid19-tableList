import { useEffect, useState } from "react";
import {
  getCountries,
  filteredCountries,
  populatedCountries
} from "../utils/getCountries";

export default function GetAllCountryData() {
  const [countries, setCountries] = useState([]);
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    (async function getData() {
      const response = await getCountries();
      const result = filteredCountries(response);

      const newCountries = await populatedCountries(result);

      let data = await Promise.all(newCountries);
      data = data.filter(data => data !== undefined);

      // console.log(data);

      setCountries(data);
      setCount(data.length);
      setStatus("resolved");
    })();
  }, []);

  // if (status === "idle") return <p>Welcome</p>;
  // if (status === "pending") return <p>Loading...</p>;
  // if (status === "resolved")
  //   return (
  //     <div className="App">
  //       <pre>{JSON.stringify(countries, null, 2)}</pre>
  //     </div>
  //   );
  return { status, countries, count };
}
