const convertKelvinToFahrenheit = (kelvin) => {
  const celsius = kelvin - 273.15; //0K − 273.15
  console.log(celsius);
  const fahrenheit = (celsius * (9/5)) + 32; //(0°C × 9/5) + 32 
  console.log(fahrenheit);

  return `The temperature is ${kelvin} degrees ${Math.floor(fahrenheit)} Fahrenheit`;
}

console.log(convertKelvinToFahrenheit(0)); 

const convertCelsiusToNewton = (celsius) => {
  const newton = celsius * 0.33000; //Newton = Celsius * (33/100)
  return `${celsius} to ${Math.floor(newton)}`;
}

console.log(convertCelsiusToNewton(9));
