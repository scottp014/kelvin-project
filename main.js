// temperature in kelvin 
const kelvin = 293;

// conversion of kelvin to celsius
const celsius = kelvin - 273;

// converts celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// rounds down to whole number temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
