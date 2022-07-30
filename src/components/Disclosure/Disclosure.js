export default class Disclosure {
  constructor(el) {
    el.addEventListener("click", () => {
      alert("Good job!");
    });
  }

  destroy() {
    console.log("destroyed");
  }
}
