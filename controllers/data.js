function text(data) {
  const countryName = JSON.stringify(data[0].name.common).replace(/"/g, '');
  const currenciesCode = Object.keys(data[0].currencies)[0];
  const currencyName = JSON.stringify(data[0].currencies[currenciesCode].name).replace(/"/g, '');
  const phoneCode = JSON.stringify(data[0].idd.root).replace(/"/g, '');
  const phoneSuffixes = JSON.stringify(data[0].idd.suffixes);
  const capital = JSON.stringify(data[0].capital[0]).replace(/"/g, '');
  const stateLang = JSON.stringify(data[0].languages);
  const flag = JSON.stringify(data[0].flag).replace(/"/g, '');
  const area = JSON.stringify(data[0].area);
  const population = JSON.stringify(data[0].population);
  const borders = JSON.stringify(data[0].borders);
  const carSide = JSON.stringify(data[0].car.side).replace(/"/g, '');
  const timezones = JSON.stringify(data[0].timezones);

  const text =
  "<b>Country name:</b> " + countryName + "\n" +
  "<b>Currency:</b> " + currencyName + "\n" +
  "<b>Phone code:</b> " + phoneCode + "\n" +
  "<b>Phone suffixes:</b> " + phoneSuffixes + "\n" +
  "<b>Capital:</b> " + capital + "\n" +
  "<b>State language:</b> " + stateLang + "\n" +
  "<b>Flag:</b> " + flag + "\n" +
  "<b>Area:</b> " + area + "\n" +
  "<b>Population:</b> " + population + "\n" +
  "<b>Neighboring countries:</b> " + borders + "\n" +
  "<b>Car side:</b> " + carSide + "\n" +
  "<b>Timezone:</b> " + timezones;


  return text;
}

module.exports = { text };