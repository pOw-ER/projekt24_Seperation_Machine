const text = document.getElementById('text')
const trennungWort = document.getElementById('trennung')
const davor = document.getElementById('davor')
const danach = document.getElementById('danach')
const hinterTeil = document.getElementById('hinter')
const vorderTeil = document.getElementById('vorder')

let trennen = () => {
  if (davor.checked) {
    if (text.value.indexOf(trennungWort.value) < 0) {
      vorderTeil.innerHTML = "Der Zeichen konnte leider nicht gefunden werden"
      hinterTeil.innerHTML = text.value
    }
    else {
      hinterTeil.innerHTML = text.value.slice(text.value.indexOf(trennungWort.value))
      vorderTeil.innerHTML = text.value.slice(0, text.value.indexOf(trennungWort.value))
    }

  } else {
    if (text.value.indexOf(trennungWort.value) < 0) {
      vorderTeil.innerHTML = "Der Zeichen konnte leider nicht gefunden werden"
      hinterTeil.innerHTML = text.value
    }
    else {
      hinterTeil.innerHTML = text.value.slice(text.value.indexOf(trennungWort.value) + trennungWort.value.length)
      vorderTeil.innerHTML = text.value.slice(0, text.value.indexOf(trennungWort.value) + trennungWort.value.length)
    }
  }
}
