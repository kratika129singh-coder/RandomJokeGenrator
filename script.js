const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const jokeBtn = document.getElementById("jokeBtn");

async function fetchJoke() {
  setupElement.textContent = "Loading joke...";
  punchlineElement.textContent = "";

  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart");
    const data = await response.json();

    setupElement.textContent = data.setup;
    punchlineElement.textContent = data.punchline;
  }
   catch (error) {
    setupElement.textContent = "Oops! Something went wrong.";
    punchlineElement.textContent = "Please try again later.";
    console.error("Error fetching joke:", error);
  }
}
jokeBtn.addEventListener("click", fetchJoke);
fetchJoke();