// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let totalCount = 0;
  for (let i = 0; i < birdsPerDay.length; i++) totalCount += birdsPerDay[i];
  return totalCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdsPerDayInArray = Array.from(birdsPerDay);
  let startOfTheWeek = week <= 1 ? 0 : (week - 1) * 7; // if week 1 => starts 0, week 2 => starts 7
  let endOfTheWeek = startOfTheWeek == 0 ? 7 : week * 7; // if week 1 => end 7, week 3 => end 21

  const birdsInNWeek = birdsPerDayInArray.slice(startOfTheWeek, endOfTheWeek);
  return totalBirdCount(birdsInNWeek);
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (const [key, value] of Object.entries(birdsPerDay))
    if (key % 2 === 0) birdsPerDay[key]++;
}
