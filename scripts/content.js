//const poster = document.querySelector("[class = 'image']")
//const text = Array.from(document.querySelectorAll("p")).forEach((element) => element.style.fontWeight = "bold")
//const links = Array.from(document.querySelectorAll("a")).forEach((element) => element.style.fontWeight = "bold")

const elements = Array.from(document.querySelectorAll("p"))
for (let i = 0; i < elements.length; i++) {
  const words = elements[i].textContent.split(" ")

  const modifiedWords = words.map(word => {
    const divide = Math.ceil(word.length / 2)
    const firstHalf = word.substring(0, divide)
    const secondHalf = word.substring(divide)
    return `<b>${firstHalf}</b>${secondHalf}`
})

  elements[i].innerHTML = modifiedWords.join(' ')
}