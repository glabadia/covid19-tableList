import { useEffect, useState } from "react";
import {
  getCountries,
  filteredCountries,
  populatedCountries,
  getTotalCount
} from "../utils/getCountries";

export default function GetWorldTotals() {
  const [total, setTotal] = useState([]);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setStatus("pending");
    (async function getData() {
      const response = await getCountries();
      const result = filteredCountries(response);

      const newCountries = await populatedCountries(result);

      let data = await Promise.all(newCountries);
      data = data.filter(data => data !== undefined);

      const dataCountries = await getTotalCount(data);
      // console.log(dataCountries);

      setTotal(dataCountries);
      setStatus("resolved");
    })();
  }, []);

  // if (status === "idle") return <p>Welcome</p>;
  // if (status === "pending") return <p>Loading...</p>;
  // if (status === "resolved")
  //   return (
  //     <div className="App">
  //       <pre>{JSON.stringify(total, null, 2)}</pre>
  //     </div>
  //   );
  return { status, total };
}
