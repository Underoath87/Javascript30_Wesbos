const inputs = document.querySelectorAll(".controls input");

const handleUpdate = function () {
  const suffix = this.dataset.sizing || "";
  // if (!suffix) return "";
  //   console.log(this.name);

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );

  // console.log(this.value);
};

//attach addeventlistener in each input
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
// inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
