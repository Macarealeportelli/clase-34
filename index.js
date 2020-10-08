const mostrarSubtotal = document.getElementById("subtotal")
const pagaConTarjeta = document.getElementById("tarjeta")
const tieneDescuento = document.getElementById("tiene-descuento")
const tieneEnvio = document.getElementById("tiene-envio")
const pagaConEfectivo = document.getElementById("efectivo")
const mostrarRecargo = document.getElementById("recargo")
const mostarDescuento = document.getElementById("descuento")
const mostrarEnvio = document.getElementById("envio")
const mostarTotal = document.getElementById("total")
const subtotalProductos = 55000
const gastoDeEnvio = 50



//funcion que calcula el 10% de recargo por pago con tarjeta
const obtenerRecargo = (subtotalProductos) => {
    const calculoRecargo = subtotalProductos * 0.1
    return calculoRecargo
}
console.log (obtenerRecargo(subtotalProductos))


//funcion que calcula el 10% de descuento
const obtenerDescuento = (subtotalProductos) => {
    const calculoDescuento = subtotalProductos - subtotalProductos * 0.1
    return calculoDescuento
}
console.log (obtenerDescuento(subtotalProductos))

//funcion que suma costo de envío de 50
const obtenerEnvio = (subtotalProductos)=>{
    const calculoEnvio = subtotalProductos + 50
    return calculoEnvio
}
console.log (obtenerEnvio(subtotalProductos))