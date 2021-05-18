/*!
 * ago
 * A Node.js module to generate a string representation of a time in the past, compared with now, in the format of x-secs/mins/hours/days/week/years ago
 * @newtovaux
 * MIT Licensed
 */

"use strict";

exports.ago = function (d) {
  // Check if d is a Date object
  if (d === void 0) return "undefined";
  if (d === null) return "null";
  if (typeof d !== "object") return "undefined";
  if (d instanceof Date) {
    // Get the passed time, in seconds
    let unixts = d.getTime() / 1000;
    // Get the time now, in seconds
    let nowts = new Date().getTime() / 1000;
    // Check the passed time is in the past, the clue is in the title ;-)
    if (nowts < unixts) {
      return "future";
    } else {
      // Calculate the difference in seconds
      const diffts = Math.floor(nowts - unixts)
      if (diffts == 0) {
        return '0 seconds ago'
      }
      if (diffts < 60) {
        return `${diffts} second${diffts !== 1 ? 's':''} ago`;
      } else if ((diffts >= 60) && (diffts < 60 * 59))
      {
        const mins = Math.floor(diffts / 60)
        return `${mins} minute${mins !== 1 ? 's':''} ago`;
      }
    }
    return "";
  }
};
