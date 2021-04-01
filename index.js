/*!
 * ago
 * @newtovaux
 * MIT Licensed
 */

"use strict";

exports.ago = function (d) {
  if (d === void 0) return "undefined";
  if (d === null) return "null";
  if (typeof d !== "object") return "undefined";
  if (d instanceof Date) {
    return "";
  }
};
