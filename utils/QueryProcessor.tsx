function isPrime(number: number): boolean {
  if (number <= 1) {
    return false;
  }

  if (number <= 3) {
    return true;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}




export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "My Andrew ID is lanyuntw."
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "Luna"
    );
  }

  if (query.toLowerCase().includes("plus")) {
    // Use regular expressions to find integers in the string
    const integerRegex = /\d+/g; // Matches one or more digits

    const integersFound = query.match(integerRegex);

    if (!integersFound) {
      return ""; // No integers found
    }
  
    const sum = integersFound
      .map((str) => parseInt(str, 10)) // Parse each integer
      .reduce((acc, num) => acc + num, 0); // Sum up the integers
  
    return sum.toString();

  }

  if (query.toLowerCase().includes("multiplied")) {
    // Use regular expressions to find integers in the string
    const integerRegex = /\d+/g; // Matches one or more digits

    const integersFound = query.match(integerRegex);

    var result = 0
    if (integersFound && integersFound.length >= 2) {
      const firstInteger = parseInt(integersFound[0]);
      const secondInteger = parseInt(integersFound[1]);
      // Perform addition
      result = firstInteger * secondInteger;
    }
    
    return (
      result.toString()
    );
  }

  if (query.toLowerCase().includes("largest")) {
    // Use regular expressions to find integers in the string
    const integerRegex = /\d+/g; // Matches one or more digits

    const integersFound = query.match(integerRegex);

    var result = 0
    if (integersFound && integersFound.length >= 3) {
      const firstInteger = parseInt(integersFound[0]);
      const secondInteger = parseInt(integersFound[1]);
      const thirdInteger = parseInt(integersFound[2]);
      // Perform addition
      result = Math.max(firstInteger, secondInteger, thirdInteger);
    }
 
    return (
      result.toString()
    );
  }

  if (query.toLowerCase().includes("minus")) {
    // Use regular expressions to find integers in the string
    const integerRegex = /\d+/g; // Matches one or more digits

    const integersFound = query.match(integerRegex);

    var result = 0
    if (integersFound && integersFound.length >= 2) {
      const firstInteger = parseInt(integersFound[0]);
      const secondInteger = parseInt(integersFound[1]);
      // Perform addition
      result = firstInteger - secondInteger;
    }
 
    return (
      result.toString()
    );
  }

  if (query.toLowerCase().includes("prime")) {
    // Use regular expressions to find integers in the string
    const integerRegex = /\d+/g; // Matches one or more digits

    const integersFound = query.match(integerRegex);

    var result = 0
    if (!integersFound) {
      return (
        ""
      );
    }

    const filteredIntegers = integersFound
    .map((str) => parseInt(str)) // Parse each integer
    .filter((num) => isPrime(num)); // Filter integers using the helper function

    if (filteredIntegers.length === 0) {
      return ""; // No integers passed the helper function's test
    }

    const resultString = filteredIntegers.join(", ");
    return resultString;
    
  }


  return "";
}
   