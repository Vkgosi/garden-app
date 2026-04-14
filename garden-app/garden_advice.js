/**
 * Returns the season based on the given month.
 * @param {string} month - The name of the month.
 * @returns {string} - The season name.
 */
function getSeason(month) {

  const summerMonths = ["December", "January", "February"]
  const autumnMonths = ["March", "April", "May"]
  const winterMonths = ["June", "July", "August"]
  const springMonths = ["September", "October", "November"]

  if (summerMonths.includes(month)) return "Summer"
  if (autumnMonths.includes(month)) return "Autumn"
  if (winterMonths.includes(month)) return "Winter"
  if (springMonths.includes(month)) return "Spring"

  return "Unknown season"
}

/**
 * Returns gardening advice based on the given month.
 * @param {string} month - The name of the month.
 * @returns {string} - Gardening advice message.
 */
function getGardenAdvice(month) {

  const season = getSeason(month)

  if (season === "Summer") {
    return "Water plants early and protect from heat"
  }
  else if (season === "Autumn") {
    return "Prepare soil and plant seasonal crops"
  }
  else if (season === "Winter") {
    return "Protect plants from frost and reduce watering"
  }
  else if (season === "Spring") {
    return "Ideal time to plant new seeds and fertilize"
  }

  return "No advice available"
}

// Example test
console.log(getGardenAdvice("March"))