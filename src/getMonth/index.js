import toDate from '../toDate/index.js'

/**
 * @name getMonth
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @param {Options} [options] - the object with options. See [Options]{@link docs/Options}
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
export default function getMonth (dirtyDate, dirtyOptions) {
  var date = toDate(dirtyDate, dirtyOptions)
  var month = date.getMonth()
  return month
}