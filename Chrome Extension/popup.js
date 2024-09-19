const icebreakers = [
  {text: "What was your most unrealistic purchase?", url: null, category: "Questions"},
  {text: "What is the silliest thing that you are really good at?", url: null, category: "Questions"},
  {text: "What slang are you happy went out of fashion? Why?", url: null, category: "Questions"},
  {text: "Would You Rather...", url: "https://crowdparty.app/game/would-you-rather", category: "Small Group Activities"},
  {text: "Two Truths and a Lie", url: "https://crowdparty.app/game/two-truths-and-a-lie", category: "Small Group Activities"},
  {text: "Just Dance - Rasputin", url:"https://youtu.be/NJh5idlanrc?si=yxtY4HlpRgm7Juw6", category: "Misc"}
];

function displayIcebreaker(filteredIcebreakers) {
  const icebreakerText = document.getElementById("icebreaker");

  // select random icebreaker
  const randomIndex = Math.floor(Math.random() * filteredIcebreakers.length);
  const selectedIcebreaker = filteredIcebreakers[randomIndex];

  // display selected icebreaker
  icebreakerText.textContent = selectedIcebreaker.text;
  icebreakerText.style.display = "block";

  // check if icebreaker has associated url
  if (selectedIcebreaker.url) {
    // open url after delay (5 seconds)
    setTimeout(() => {
      window.open(selectedIcebreaker.url, "_blank");
    }, 5000);
  }
}

document.getElementById("new-icebreaker").addEventListener("click", () => {
  const button = document.getElementById("new-icebreaker");
  const categories = document.getElementById("categories");
  const icebreakerText = document.getElementById("icebreaker");

  // move button to corner and show categories
  button.classList.remove("center-button");
  button.classList.add("circle-button");
  // remove text inside button
  button.textContent = "";
  categories.classList.remove("hidden");
  // show the categories button
  categories.style.display = "flex"; 

  // change container layout to stop centering
  const container = document.querySelector(".icebreaker-container");
  container.classList.remove("initial-state");
});

document.getElementById("questions").addEventListener("click", () => {
  const questions = icebreakers.filter(icebreaker => icebreaker.category === "Questions");
  displayIcebreaker(questions);
});

document.getElementById("small-group-activities").addEventListener("click", () => {
  const activities = icebreakers.filter(icebreaker => icebreaker.category === "Small Group Activities");
  displayIcebreaker(activities);
});

document.getElementById("misc").addEventListener("click", () => {
  const misc = icebreakers.filter(icebreaker => icebreaker.category === "Misc");
  displayIcebreaker(misc);
});