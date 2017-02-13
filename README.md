# food-list
Generates a shopping list from weekly food plan. Use at your own risk!

# How it works
1. Add receipes by meal (breakfast, lunch, snack & dinner) along with their shopping list to `rough_plan.json`
2. Edit the days list in `generate_daily_plan.js` to match the days when you wanna cook (i don't like cooking Sunday for Monday)
3. Run `node generate_daily_plan.js` and copy the output to `foodPerDay.json`
4. Run `node generate_shopping_list.js` to generate the shopping list with unique items.
5. Order/go to shop etc etc
