// Function to give gardening advice based on month
function getGardenAdvice(month) {
  const advice = {
    January: "Water plants early in the morning",
    February: "Start preparing soil for planting",
    March: "Plant seasonal vegetables",
    April: "Check for pests and weeds",
    May: "Water plants regularly",
    June: "Protect plants from cold",
    July: "Prune plants and trees",
    August: "Harvest crops",
    September: "Plant new seeds",
    October: "Fertilize the soil",
    November: "Prepare for rainy season",
    December: "Maintain garden regularly"
  }

  return advice[month] || "No advice available for this month"
}

// Example usage
console.log(getGardenAdvice("March"))