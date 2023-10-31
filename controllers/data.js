const getText = (data) => {
  const {
    name,
    currencies,
    idd,
    capital,
    languages,
    flag,
    area,
    population,
    borders,
    car,
    timezones,
  } = data[0];

  const countryName = name.common;
  const currenciesCode = Object.keys(currencies)[0];
  const currencyName = currencies[currenciesCode].name;
  const phoneCode = idd.root;
  const phoneSuffixes = JSON.stringify(idd.suffixes);
  const capitalName = capital[0];
  const stateLang = JSON.stringify(languages);
  const flagUrl = flag;
  const countryArea = area;
  const countryPopulation = population;
  const neighboringCountries = JSON.stringify(borders);
  const drivingSide = car.side;
  const countryTimezones = JSON.stringify(timezones);

  const text = `
    <b>Country name:</b> ${countryName}
    <b>Currency:</b> ${currencyName}
    <b>Phone code:</b> ${phoneCode}
    <b>Phone suffixes:</b> ${phoneSuffixes}
    <b>Capital:</b> ${capitalName}
    <b>State language:</b> ${stateLang}
    <b>Flag:</b> ${flagUrl}
    <b>Area:</b> ${countryArea}
    <b>Population:</b> ${countryPopulation}
    <b>Neighboring countries:</b> ${neighboringCountries}
    <b>Car side:</b> ${drivingSide}
    <b>Timezone:</b> ${countryTimezones}
  `;

  return text;
};

module.exports = { getText };
