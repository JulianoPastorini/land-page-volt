// Simulação de envio. A validação dos campos é feita pelo próprio HTML.
const formulario = document.querySelector('#form-contato');
const aviso = document.querySelector('#aviso-form');
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault();
  aviso.textContent = 'Demonstração concluída! Em um site real, a mensagem seria enviada para a equipe.';
  formulario.reset();
});
