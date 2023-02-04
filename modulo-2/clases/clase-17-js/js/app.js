// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('No se ha resuelto la promesa');
//   }, 3000)
// });

// promesa
// .then((resp) => console.log(resp))
// .catch((resp) => console.error(resp));

// const motos = [
//   {
//     id: 1,
//     marca: 'Honda',
//   },
//   {
//     id: 2,
//     marca: 'Yamaha',
//   },
//   {
//     id: 3,
//     marca: 'Zanella',
//   },
//   {
//     id: 4,
//     marca: 'Mondial',
//   },
// ];


// const buscarPorId = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const findMoto = motos.find((motos) => motos.id == id);
//       if (findMoto) {
//         resolve(findMoto);
//       } else {
//         reject('No se ha encontrado éste id.');
//       };
//     }, 3000);
//   });
// };

// buscarPorId(5)
// .then((resp) => {
//   console.log(resp);
//   document.body.innerText = resp.marca;
// })
// .catch((resp) => {
//   console.error(resp);
// });


// Consumo de API. Obteniendo recursos de un servidor.
// fetch('https://pokeapi.co/api/v2/pokemon/1', {
//   method: 'GET'
// })
// .then((resp) => resp.json())
// .then((resp) => console.log(resp))
// .catch((error) => {
//   console.error(error);
//   alert('Ha ocurrido un error.');
// });


// AJAX
// JSON

// GET
const obtener = () => {
  // fetch('http://localhost:3000/posts?deleted-ne=true')
  fetch('http://localhost:3000/posts/')
  .then((resp) => resp.json())
  .then((resp) => resp.map((post) => {
    if (!post.deleted) {
      console.group(post.title);
      console.log(post.author);
      console.log(post.id);
      console.groupEnd();
    };
  }))
  .catch((error) => console.log(error))
};

// POST
const guardarEnDb = () => {
  fetch('http://localhost:3000/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: "Creando un segundo POST",
      author: "Ale",
      description: 'Estamos probando el método POSTx2',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))
};

// DELETE
const eliminarRegistro = () => {
  fetch('http://localhost:3000/posts/2', {
    method: 'DELETE'
})
.then((resp) => resp.json())
.then((resp) => console.log(resp))
.catch((error) => console.log(error))
};

// PUT
const editarConPut = () => {
  fetch('http://localhost:3000/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      title: "Actualizado con PUT",
      author: "typicode",
      deleted: true,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))
};

// PATCH
const editarConPatch = () => {
  fetch('http://localhost:3000/posts/3', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'Editado con un PATCH'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then((resp) => resp.json())
  .then((resp) => console.log(resp))
  .catch((error) => console.log(error))
};