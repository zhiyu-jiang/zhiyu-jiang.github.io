(function () {
  "use strict";

  var allowInForm = function (event) {
    var target = event.target || event.srcElement;
    if (!target) {
      return false;
    }

    var tagName = (target.tagName || "").toLowerCase();
    return tagName === "input" || tagName === "textarea" || target.isContentEditable;
  };

  var blockEvent = function (event) {
    if (allowInForm(event)) {
      return true;
    }

    if (event.preventDefault) {
      event.preventDefault();
    }
    event.returnValue = false;
    return false;
  };

  var blockedKeys = {
    65: true,  // Ctrl/Cmd + A
    67: true,  // Ctrl/Cmd + C
    83: true,  // Ctrl/Cmd + S
    85: true,  // Ctrl/Cmd + U
    80: true,  // Ctrl/Cmd + P
    123: true  // F12
  };

  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.className += " protected-page";
    document.body.setAttribute("data-content-protected", "true");
  });

  ["copy", "cut", "paste", "selectstart", "dragstart", "contextmenu"].forEach(function (eventName) {
    document.addEventListener(eventName, blockEvent, true);
  });

  document.addEventListener("keydown", function (event) {
    var keyCode = event.keyCode || event.which;
    var ctrlOrMeta = event.ctrlKey || event.metaKey;

    if ((ctrlOrMeta && blockedKeys[keyCode]) || keyCode === 123) {
      return blockEvent(event);
    }

    if (event.ctrlKey && event.shiftKey && (keyCode === 73 || keyCode === 74 || keyCode === 67)) {
      return blockEvent(event);
    }

    return true;
  }, true);

  document.addEventListener("keyup", function () {
    if (window.getSelection) {
      var selection = window.getSelection();
      if (selection && selection.removeAllRanges) {
        selection.removeAllRanges();
      }
    }
  }, true);
}());