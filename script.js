// zadanie 1
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

// zadanie 2
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("ex2_text");
  const output = document.getElementById("ex2_content");

  if (!input || !output) return;

  input.addEventListener("input", () => {
    const val = input.value;

    // 1. Sprawdzenie liter
    if (/[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(val)) {
      output.textContent = "Numer nie może zawierać liter";
    }
    // 2. Sprawdzenie znaków spejcalnych
    else if (/[^0-9a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/.test(val)) {
      output.textContent = "Numer nie może zawierać znaków specjalnych";
    }
    // 3. Sprawdzenie długości
    else if (val.length !== 9) {
      output.textContent = "Długość numeru musi być równa 9";
    }
    // 4. Dokładnie 9 cyfr
    else {
      output.textContent = "Numer telefonu jest poprawny";
    }
  });
});
