function Menu(e) {
  let list = document.querySelector("ul")
  e.name === "menu"
    ? ((e.name = "close"),
      list.classList.add("top-[80px]"),
      list.classList.add("opacity-100"))
    : ((e.name = "menu"),
      list.classList.remove("top-[80px]"),
      list.classList.remove("opacity-100"))
}

function toggleReadMore() {
  // Get all toggle buttons and hide buttons
  const toggleButtons = document.querySelectorAll(".toggle-btn")
  const hideButtons = document.querySelectorAll(".hide-btn")
  const moreTexts = document.querySelectorAll(".more-text")

  // Add click event listeners to each toggle button
  toggleButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      toggleButtons[index].classList.toggle("hidden")
      // Toggle the visibility of the more text and buttons
      moreTexts[index].classList.toggle("hidden")
      hideButtons[index].classList.toggle("hidden")
    })
  })

  // Add click event listeners to each hide button
  hideButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Toggle the visibility of the more text and buttons
      moreTexts[index].classList.toggle("hidden")
      toggleButtons[index].classList.toggle("hidden")
      hideButtons[index].classList.toggle("hidden")
    })
  })
}
