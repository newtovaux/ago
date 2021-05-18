/*!
 * ago
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
    let unixts = d.getTime() / 1000;
    let nowts = new Date().getTime() / 1000;
    if (nowts < unixts) {
      return "future";
    } else {
      let diffts = nowts - unixts;
      if (diffts < 60) {
        return `${diffts} seconds ago`;
      }
    }
    return "";
  }
};
