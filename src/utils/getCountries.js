export const getCountries = async () => {
  var url = "https://covid19.mathdro.id/api/countries/";
  var getResponse = await fetch(url);
  var getResults = await getResponse.json();
  var getData = getResults["countries"];
  return getData;
};

export const url = country => {
  return `https://covid19.mathdro.id/api/countries/${country}`;
};

// export const filterCountries = async () => {
//   const countries = await getCountries();
//   const filtered = countries.filter(country => country.iso3);

//   return filtered;
// };

export const filteredCountries = data => {
  return data.filter(country => country.iso3);
};

export const populatedCountries = async data => {
  return await data.map(async (item, idx) => {
    var fetchURL = url(item["iso3"]);
    var fetchCountryData = await fetch(fetchURL);
    var result = await fetchCountryData.json();
    if (!result.error) {
      var { confirmed, deaths, recovered, lastUpdate } = result;
      return {
        name: item["name"],
        iso3: item["iso3"],
        confirmed: confirmed["value"],
        deaths: deaths["value"],
        recovered: recovered["value"],
        lastUpdate: new Date(lastUpdate).getTime()
      };
    }
  });
};

export const getTotalCount = async data => {
  return data.reduce((total, item) => {
    return {
      confirmed: total.confirmed + item.confirmed,
      deaths: total.deaths + item.deaths,
      recovered: total.recovered + item.recovered
    };
  });
};
