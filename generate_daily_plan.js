const food = require("./rough_plan.json")
const meals = Object.keys(food)
const days = ["tue", "wed", "thur", "fri"]
const mealsPerDay = {}


days.forEach((day, index) => {
	const mealsForToday = {}
	meals.forEach((meal) => {
		mealsForToday[meal] = Object.keys(food[meal][index])[0]
	})
	mealsPerDay[day] = mealsForToday
})

console.log(mealsPerDay)