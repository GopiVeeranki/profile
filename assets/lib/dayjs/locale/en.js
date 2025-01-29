!(function (e, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((e =
        "undefined" != typeof globalThis
          ? globalThis
          : e || self).dayjs_locale_en = n());
})(this, function () {
  "use strict";
  return {
    name: "en",
    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    months:
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    ordinal: function (e) {
      var n = ["th", "st", "nd", "rd"],
        t = e % 100;
      return "[" + e + (n[(t - 20) % 10] || n[t] || n[0]) + "]";
    },
  };
});
