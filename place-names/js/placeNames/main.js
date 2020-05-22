function main() {
  // Put your code here
  const placesArray = ["Nashville", "Hong Kong", "The back yard", "Earth",
  "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

  placesArray.forEach(place => {
    console.log(place)
  });

  console.log("")

  const filteredPlaces = placesArray.filter(place => place.startsWith("The"))
  filteredPlaces.forEach(place => {
    console.log(place)
  })
}

main();