const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => window.getComputedStyle(element).getPropertyValue(style)

const lightMode = {
  bg: getStyle(html, "--bg"),
  bgPanel: getStyle(html, "--bg-panel"),
  colorHeading: getStyle(html, "--color-heading"),
  colorText: getStyle(html, "--color-text"),
}

const darkMode = {
  bg: "#333333",
  bgPanel: "#434343",
  colorHeading: "#3664FF",
  colorText: "#B5B5B5"
}

// Formatting the objects's key to match with the CSS variable 
const transformKey = key => "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase()

const changeColors = (colors) => {
  Object.keys(colors).map(key => html.style.setProperty(transformKey(key), colors[key]))
}

checkbox.addEventListener("change", ({target}) => {
  target.checked ? changeColors(darkMode) : changeColors(lightMode)
})