function crearNodo(nodo) {
    var nodo = document.createElement(nodo)
    return nodo
}

function crearNodoConTexto(nodo, texto) {

    var nodo = crearNodo(nodo)
    var nodoTexto = document.createTextNode(texto)
    nodo.appendChild(nodoTexto)
    return nodo
}

function crearImagen(rutaImagen, textoAlt, ancho, alto) {

    var nodoImagen = crearNodo("img")
    nodoImagen.src = rutaImagen
    nodoImagen.alt = textoAlt
    nodoImagen.style.width = ancho
    nodoImagen.style.height = alto
    return nodoImagen
}
function crearVideo(rutaVideo) {
    var nodoVideo = crearNodo("video");
    var source = crearNodo("source");
    source.src = rutaVideo;
    nodoVideo.setAttribute("controls", "controls");
    nodoVideo.appendChild(source);
    return nodoVideo;
}

function crearAbre(abreviacion,txt){
    var abbr = crearNodo("abbr")
    abbr.textContent = txt
    abbr.title = abreviacion
    return abbr
}

function crearNodoEn(nodo,txt,url,target){
    var nodo = crearNodo(nodo)
    var nodoTxt = document.createTextNode(txt)
    nodo.href = url
    nodo.target = target
    nodo.appendChild(nodoTxt)
    return nodo
}


function adicionarNodoABody(nodo) {
    document.body.appendChild(nodo)

}

function adicionarNodoAContenedor(nodo, contenedor) {

    contenedor.appendChild(nodo)

}
