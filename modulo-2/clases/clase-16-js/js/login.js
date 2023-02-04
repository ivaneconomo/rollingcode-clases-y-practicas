// Simulando DB
const users = [
  {
    id : 1,
    name : 'Alejandro',
    lastName : 'Busi',
    email : 'ale@gmail.com',
    password : 'ale123',
  },
  {
    id : 2,
    name : 'Ivan',
    lastName : 'Economo',
    email : 'ivaneco@gmail.com',
    password : 'ivan123',
  },
  {
    id : 3,
    name : 'Alvarito',
    lastName : 'Jotar',
    email : 'alvajo@gmail.com',
    password : 'aljo123',
  },
];

const jsonUsers = JSON.stringify(users);
localStorage.setItem('users', jsonUsers);

// Login
const loginUser = () => {
  const userEmail = document.login.usuario.value.toLowerCase();
  const userPassword = document.login.contraseña.value.toLowerCase();
  const validationEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!validationEmail.test(userEmail)) {
    alert('Formato de email inválido.');
    return;
  };
  console.log(userEmail);
  const users = JSON.parse(localStorage.getItem('users'));
  let userLog;
  let flag = false;
  users.map((user) => {
    if (user.email.toLowerCase() === userEmail && user.password.toLowerCase() === userPassword) {
      flag = true;
      userLog = user;
    };
  });
  if (flag) {
    alert('Bienvenido');
    delete userLog.password;
    localStorage.setItem('userLog', JSON.stringify(userLog))
    window.location = './index.html';
  } else {
    alert('Usuario o contraseña incorrectos.');
  };
};

document.oncontextmenu = function () {
  return false;
};