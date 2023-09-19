
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
    var res = query.match(/d+/g)

    // Use regular expressions to find integers in the string
    const integerRegex = /\d+/g; // Matches one or more digits

    const integersFound = query.match(integerRegex);

    if (integersFound && integersFound.length >= 2) {
    const firstInteger = parseInt(integersFound[0]);
    const secondInteger = parseInt(integersFound[1]);
  
    // Perform addition
    const result = firstInteger + secondInteger;

    return (
      result.toString()
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "Luna"
    );
  }

  return "";
}
