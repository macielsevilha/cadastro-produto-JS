
function criarElemento() {
    
    let elemento = document.getElementById('header')

    let nav = document.createElement("nav")
    let div1 = document.createElement("div")
    let div2 = document.createElement("div")
    let link = document.createElement("a")
    let button = document.createElement("button")
    let icon = document.createElement("i")
    let ul = document.createElement('ul')

    nav.className = "navbar navbar-expand-lg navbar-dark bg-primary bg-gradient mb-5"
   
    div1.className = "container-fluid"

    link.className = "navbar-brand"
    link.innerHTML = "Bootstrap"
    link.href = "#"

    button.className = "navbar-toggler"
    button.type = "button"
    button.setAttribute("data-bs-toggle", "collapse")
    button.setAttribute("data-bs-target", "#navegacao")

    icon.className = "fas fa-solid fa-bars"

    div2.className = "collapse navbar-collapse"
    div2.id = "nevagacao"

    elemento.appendChild(nav)
    nav.append(div1)
    div1.append(link) 
    div1.append(button) 
    button.append(icon)
    div1.append(div2)

}

criarElemento()