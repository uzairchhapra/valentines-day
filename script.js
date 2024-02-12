var yesButton = document.getElementById("yes");
var noButton = document.getElementById("no");
var button = document.getElementsByClassName("button");
var thankYouText = document.getElementById("thankYouText");
var typeText = document.getElementById("typeText");
const text1 =
  "My dearest jaanu,\n\nI have said over and over again that there aren't enough words to quantify how much I love you. You are pretty, you are smart. You are sexy, you are hot. You are kind, you are forgiving. You are fun, and ever so endearing. You've made me a better person, jaan. You have taught me how to love. You are my savior, saving me from my own overthinking. I am ever so grateful to you for always, always having my back.\nIt's an honor to be your fiancee, my love 💗 \nI do have a question for you 😊\n\nUnder the thousand falling stars in this night sky,\nJaanu dear, will you be my valentine?";
const text2 =
  "Thank youuuuuu jaaanu!😍🎉\nI am the luckiest guy on earth!!!\n\nI lovee youu soo much my dear! ❤️";

function textTypingEffect(element, text, i = 0) {
  if (i == 0) {
    element.textContent = "";
  }
  element.textContent += text[i];
  if (i == text.length - 1) {
    return;
  }
  setTimeout(() => textTypingEffect(element, text, i + 1), 55);
}
textTypingEffect(typeText, text1);

// Function to execute when the target text is found
function executeAfterTextIsPresent() {
  console.log("Target text is present!");
  yesButton.style.display = "block";
  noButton.style.display = "block";
  // Perform your desired action here
}

// Create a new instance of MutationObserver
var observer = new MutationObserver(function (mutationsList) {
  for (var mutation of mutationsList) {
    if (
      mutation.type === "childList" &&
      mutation.target.textContent.includes("valentine?")
    ) {
      executeAfterTextIsPresent();
      // Disconnect the observer after the text is found
      observer.disconnect();
    }
  }
});

// Start observing changes in the target element
observer.observe(document.getElementById("typeText"), {
  childList: true,
  subtree: true,
});

noButton.addEventListener("click", function () {
  yesButton.style.transform =
    "scale(" +
    (parseFloat(
      yesButton.style.transform.replace("scale(", "").replace(")", "")
    ) || 1) *
      1.1 +
    ")";
  noButton.style.transform =
    "scale(" +
    (parseFloat(
      noButton.style.transform.replace("scale(", "").replace(")", "")
    ) || 1) *
      0.9 +
    ")";
});

yesButton.addEventListener("click", function () {
  // Hide buttons
  yesButton.style.display = "none";
  noButton.style.display = "none";
  typeText.style.display = "none";

  //   // Show thank you text
  thankYouText.style.display = "block";
  textTypingEffect(thankYouText, text2);
});
