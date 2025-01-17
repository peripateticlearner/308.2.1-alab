// ALAB 308.2.1: Control Flow
// Version 1.0, 10/11/23Click here to open in a separate window.
// Introduction
    // For this assignment, you will develop a simple program that generates recommendations based on a set of input data and several conditions. As you continue adding tools to your programming toolkit, these types of logic problems will become easier to solve, and your code will become more efficient.
// Objectives
    // Implement control flow using conditionals and control flow keywords.
    // Create a program that executes based on conditional logic.
// Submission
    // Submit your completed lab using the Start Assignment button on the assignment page in Canvas.
    // Your submission should include:
    // A GitHub link to your completed project repository.
// Instructions
    // Initialize a new git repository in a local project folder, and create a JavaScript file to contain your code. Complete the activity below.
    // Commit frequently! Every time something works, you should commit it. Remember, you can always go back to a previous commit if something breaks.
// Part 1: Growing Pains
    // Your task is to create a program that advises a group of environmental scientists how to handle the growth and spread of a unique plant species under their supervision. You must develop a growth control system that will monitor and predict the plant growth, making decisions based on the available space and potential growth.
    // Here is the information you have been given:
    // The area in which the plants are contained is circular, with a radius of 5 meters.
    // The formula for calculating the area of a circle is PI multiplied by the radius, squared:const PI = 3.1415;const area = PI * radius * radius;
    // Each plant requires a minimum space of 0.8 square meters.
    // The area is starting with 20 plants.
    // The plants double in number every week.
    // Using this information, your objectives are to:
    // Predict the plant growth after a specific number of weeks.
    // Implement control flow to make decisions on whether the plants should be:
    // Pruned, to stop them from exceeding the capacity of the garden.
    // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
    // Monitored, if they are growing at an acceptable rate.
    // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
    // Planted, if there is room to plant more plants.
    // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
    // Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.
// Part 2: Thinking Bigger
    // The conservation area in which the garden is located has multiple other gardens. 
    // Using the logic you have already created, determine:
    // The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
    // If the space remained circular, what would be the radius of this expanded garden?
// Part 3: Errors in Judgement
    // The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.

    // Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.



// formula for calculating the area of a cirle which is PI multiplied by the radius, squared:

const PI = 3.1415; 
const gardenRadius = 5; // Garden radius in meters
const gardenArea = PI * gardenRadius * gardenRadius; 
const spacePerPlant = 0.8; 
const maxPlantsCapacity = Math.floor(gardenArea / spacePerPlant); 

const startingPlantCount = 20; // Initial number of plants

console.log("Part 1: Growth Recommendations");

// Week 1
let plantsAfterWeek1 = startingPlantCount * 2; // Plants double after 1 week
if (plantsAfterWeek1 > 0.8 * maxPlantsCapacity) {
  console.log("Week 1: Prune the plants to prevent overcrowding.");
} else if (plantsAfterWeek1 > 0.5 * maxPlantsCapacity) {
  console.log("Week 1: Monitor the plants, growth is acceptable.");
} else {
  console.log("Week 1: Plant more plants, there is room.");
}

// Week 2
let plantsAfterWeek2 = startingPlantCount * 2 * 2; // Plants double again in week 2
if (plantsAfterWeek2 > 0.8 * maxPlantsCapacity) {
  console.log("Week 2: Prune the plants to prevent overcrowding.");
} else if (plantsAfterWeek2 > 0.5 * maxPlantsCapacity) {
  console.log("Week 2: Monitor the plants, growth is acceptable.");
} else {
  console.log("Week 2: Plant more plants, there is room.");
}

// Week 3
let plantsAfterWeek3 = startingPlantCount * 2 * 2 * 2; // Plants double again in week 3
if (plantsAfterWeek3 > 0.8 * maxPlantsCapacity) {
  console.log("Week 3: Prune the plants to prevent overcrowding.");
} else if (plantsAfterWeek3 > 0.5 * maxPlantsCapacity) {
  console.log("Week 3: Monitor the plants, growth is acceptable.");
} else {
  console.log("Week 3: Plant more plants, there is room.");
}

console.log("Part 2: Space Requirements");

// Part 2: Additional space requirements
const initialPlantCountForPart2 = 100; // Starting number of plants for part 2
const plantsAfter10Weeks = initialPlantCountForPart2 * Math.pow(2, 10); // Plants double every week for 10 weeks
const totalSpaceNeeded = plantsAfter10Weeks * spacePerPlant;
const extraSpaceNeeded = totalSpaceNeeded - gardenArea; 
const expandedGardenRadius = Math.sqrt(totalSpaceNeeded / PI);

console.log(` - Total plants after 10 weeks: ${plantsAfter10Weeks}`);
console.log(` - Additional space required: ${extraSpaceNeeded.toFixed(2)} square meters`);
console.log(` - New radius for expanded garden: ${expandedGardenRadius.toFixed(2)} meters`);

console.log("Part 3: Error Handling");

// Part 3: Error handling
const startingPlantCountForPart3 = 100; // Starting number of plants for part 3
const plantsAfter10WeeksForPart3 = startingPlantCountForPart3 * Math.pow(2, 10); // Plants double every week for 10 weeks
const spaceNeededForPart3 = plantsAfter10WeeksForPart3 * spacePerPlant;

try {
  if (spaceNeededForPart3 > gardenArea) {
    throw new Error("The garden does not have enough space for the plants.");
  }
  console.log(" - Plants fit within the original garden.");
} catch (error) {
  console.error(`Error: ${error.message}`);
}
