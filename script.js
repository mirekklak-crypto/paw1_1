(function () {
  const button = document.getElementById("ex1_button");
  const content = document.getElementById("ex1_content");

  button.addEventListener("click", function () {
    content.textContent = Array.from(
      { length: 10 },
      (_, number) => number,
    ).join(",");
  });
})();
