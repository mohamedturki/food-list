const plan = require("./foodPerDay.json")
const days = Object.keys(plan)
let shoppingList = []

for (day in plan) {
	for (meal in plan[day]) {
		const dish = Object.keys(plan[day][meal])[0]
		shoppingList = [...shoppingList, ...plan[day][meal][dish]]
	}
}

const shortlist = [...new Set(shoppingList)].sort();

console.log(shortlist)