/* Dificultad:  🟢
1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto. */
function Auto(color, marca, modelo, año) {
  this.colorA = color;
  this.marcaA = marca;
  this.modeloA = modelo;
  this.añoA = año;
  this.status = false;
  this.onOff = () => {
    let onOff = confirm('encender o apagar');
    if (onOff) {
      this.status = 'Encendido';
    } else {
      this.status = 'Apagado';
    }
    alert(`Estado del Motor: ${this.status}`);
  }
  this.onOff();
};
const autoNuevo = new Auto('negro', 'chevrolet', 'cruce', 2022);