// "use strict";

const inputs = document.querySelectorAll("input[type=checkbox]");

let lastChecked;

const evtHandler = (evt) => {


  let inBetween = false;

  if (evt.shiftKey && evt.target.checked) {

    for (let input of inputs) {

      if (input === evt.target || input === lastChecked) {

        inBetween = !inBetween;

      }

      if (inBetween) {
        input.checked = true;
      }

    }

  }

  lastChecked = evt.target;

}

for (let input of inputs) {

  input.addEventListener("click", evtHandler);

};