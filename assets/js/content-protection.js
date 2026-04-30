(function () {
  "use strict";

  function blockEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    return false;
  }

  function isProtectedShortcut(event) {
    var key = (event.key || "").toLowerCase();
    return (
      (event.ctrlKey || event.metaKey) &&
      ["a", "c", "x", "s", "p", "u"].indexOf(key) !== -1
    );
  }

  document.addEventListener("contextmenu", blockEvent, true);
  document.addEventListener("copy", blockEvent, true);
  document.addEventListener("cut", blockEvent, true);
  document.addEventListener("paste", blockEvent, true);
  document.addEventListener("selectstart", blockEvent, true);
  document.addEventListener("dragstart", blockEvent, true);

  document.addEventListener(
    "keydown",
    function (event) {
      if (isProtectedShortcut(event)) {
        return blockEvent(event);
      }

      if (event.key === "F12") {
        return blockEvent(event);
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.shiftKey &&
        ["i", "j", "c"].indexOf((event.key || "").toLowerCase()) !== -1
      ) {
        return blockEvent(event);
      }

      return true;
    },
    true
  );

  document.addEventListener(
    "DOMContentLoaded",
    function () {
      document.body.setAttribute("data-content-protected", "true");
    },
    false
  );
})();