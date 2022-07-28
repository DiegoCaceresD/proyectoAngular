//------- prueba -------------
function showAlert(){
  alert("funciona")
}
//----------Local Storage productos buscados-------------------
function guardarProductosLS(productos){
  localStorage.setItem("productos", JSON.stringify(productos));
}
function cargarProductosLS() {
  return JSON.parse(localStorage.getItem("productos"));
}
//--------Actualizar Boton Favorito----------------
function actualizarBotonFavorito() {
  let span= document.querySelector('.translate-middle')
  let producto_favorito = cargarProductosFavorito();
  span.innerHTML=producto_favorito.length
}
//--------Local Storage Favoritos--------------------------
function AgregarFavoritos(id) {
  let producto = buscarProducto(id);
  let producto_favorito = cargarProductosFavorito();
  producto_favorito.push(producto);
  localStorage.setItem("favorito", JSON.stringify(producto_favorito));
  actualizarBotonFavorito();
}
function cargarProductosFavorito() {
  if (localStorage.getItem("favorito")) {
    return JSON.parse(localStorage.getItem("favorito"));
  }
  return [];
}
//---------- buscar producto por ID----------
function buscarProducto(id) {
  let productos = cargarProductosLS();
  console.log(id)
  return productos.find((x) => x.id == id);

}
