const $adviceId = document.querySelector("#advice-id");
const $adviceText = document.querySelector("#advice");
const $btn = document.querySelector("#btn");
async function onClick() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();

    $adviceId.textContent = `ADVICE # ${data.slip.id}`;
    $adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {}
}

$btn.addEventListener("click", onClick);

onClick();
