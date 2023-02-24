const formulario = document.getElementById('evaluation-form');

const validateLogin = (userLogin) => {
  let status = false;
  const users = [
    {
      email: 'tryber@teste.com',
      password: '123456',
    },
  ];
  users.forEach((user) => {
    if (user.email === userLogin.email && user.password === userLogin.password) {
      status = true;
    }
  });
  const alerta = status ? 'Olá, Tryber!' : 'Email ou senha inválidos.';
  alert(alerta);
};

const cleanHeaderInputs = () => {
  const inputs = document.querySelectorAll('header input');
  inputs.forEach((input) => {
    input.value = '';
  });
};

const login = () => {
  const btnSubmit = document.querySelector('#login');
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const userLogin = {
      email: `${email.value}`,
      password: `${password.value}`,
    };
    cleanHeaderInputs();
    validateLogin(userLogin);
  });
};

const materiasSelecionadas = () => {
  const matSelecionadas = [];
  const materias = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  materias.forEach((materia) => {
    if (formulario[materia].checked) {
      matSelecionadas.push(materia);
    }
  });
  return matSelecionadas.join(', ');
};

const mountPrint = () => {
  const p = document.createElement('p');
  p.innerHTML = `Nome: ${formulario['input-name'].value} ${formulario['input-lastname'].value}<br>`;
  p.innerHTML += `Email: ${formulario['input-email'].value}<br>`;
  p.innerHTML += `Casa: ${formulario.house.value}<br>`;
  p.innerHTML += `Família: ${formulario.family.value}<br>`;
  p.innerHTML += `Matérias: ${materiasSelecionadas()}<br>`;
  p.innerHTML += `Avaliação: ${formulario.rate.value}<br>`;
  p.innerHTML += `Observações: ${formulario.comentario.value}<br>`;
  return p;
};

const printInscription = () => {
  const form = document.querySelector('#section-form');
  const inscription = document.querySelector('#inscricao');
  const dataInscription = document.getElementById('dados-inscricao');
  form.style.display = 'none';
  inscription.style.display = 'flex';
  dataInscription.innerHTML = '';
  dataInscription.appendChild(mountPrint());
};

const signup = () => {
  const btnSubmit = document.querySelector('#submit-btn');
  btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    printInscription();
  });
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', (event) => {
    const check = event.target.checked;
    if (check === true) {
      btnSubmit.disabled = false;
    } else {
      btnSubmit.disabled = true;
    }
  });
};

const commentCharacterCount = () => {
  const commentArea = document.querySelector('#textarea');
  commentArea.innerHTML = '';
  const countText = document.querySelector('#counter');
  commentArea.addEventListener('input', (event) => {
    const comment = event.target.value;
    const count = 500 - comment.length;
    countText.innerHTML = count;
  });
};

const btnVoltar = () => {
  const btn = document.querySelector('#btn-voltar');
  btn.addEventListener('click', () => {
    const sectionform = document.querySelector('#section-form');
    const inscription = document.querySelector('#inscricao');
    const form = document.querySelector('#evaluation-form');
    form.reset();
    sectionform.style.display = 'flex';
    inscription.style.display = 'none';
  });
};

document.addEventListener('DOMContentLoaded', () => {
  cleanHeaderInputs();
  login();
  signup();
  commentCharacterCount();
  btnVoltar();
});
