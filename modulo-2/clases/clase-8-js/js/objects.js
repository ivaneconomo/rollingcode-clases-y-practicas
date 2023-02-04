const auto = {
  color: 'rojo',
  marca: 'fiat',
  modelo: 2020,
  automatico: false,
  combustible: ['gasoil', 'nafta', 'electrico']
};

// console.log(auto);

// // Editar VALOR de una KEY.
// auto.color = 'amarillo';

// // Agregar KEY al OBJETO.
// auto.puertas = 5;

// // Eliminar una PROPIEDAD.
// delete auto.marca
// // también: delete auto['marca']

// console.log(auto);


///////////////////////////////////////////
// Recorrer las propiedades de un objeto.//

// for (var llave in auto) {
//   if (auto.hasOwnProperty(llave))           {
//     console.log(auto[llave])
//   }
// }

// const llaves = Object.keys(auto);

// for (let i = 0; i < llaves.length; i++) {
//   let llave = llaves[i];
//   console.log(auto[llave]);
// }

let products = [
  { 
    id: 1232,
    name: "Leche",
    price: 120,
    categories: ["familiar", "comida"],
  },
  { 
    id: 1232,
    name: "Arroz",
    price: 80,
    categories: ["familiar", "comida"]
  },
  { 
    id: 3442,
    name: "Lavadora",
    price: 7800,
    categories: ["electrodomésticos"] 
  },
];


for (let i = 0; i < products.length; i++) {
  console.group(products[i].name)
  console.log(`Id: ${products[i].id}`)
  console.log(`Precio: ${products[i].price}`)
  console.log(`Categoria: ${products[i].categories}`)
  console.groupEnd();
}