const getWord = async () => {
  const res = await fetch("/get-word")
  const word = await res.text()

  document.getElementById("random-word").innerText = word
}

getWord()
