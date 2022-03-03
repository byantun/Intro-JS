//This
const reservation = {
    nombre: 'Diego',
    apellido: 'Antunez',
    total: 5000,
    pagado: false,
    information: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es: ${this.total}`)
    }
}
reservation.information();