function toggleMode() {
  const html = document.documentElement

  //pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imgem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute(
      "src",
      "./assets/assets/avatarLinkedin.png"
    )
  } else{
    // se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  }

  html.classList.toggle('light')
  
}
