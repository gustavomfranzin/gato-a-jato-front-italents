const profileImage = document.querySelector(".img-profile");
const modal = document.getElementById("modal");
const dadosLink = document.getElementById("dados-link");
const acessoLink = document.getElementById("acesso-link");
const sairLink = document.getElementById("sair-link");
const cancelLink = document.getElementById("cancel-link");

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

profileImage.addEventListener("click", openModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

dadosLink.addEventListener("click", () => {
  alert("Dados Cadastrais selecionados");
  closeModal();
});

acessoLink.addEventListener("click", () => {
  alert("Controle de Acesso selecionado");
  closeModal();
});

sairLink.addEventListener("click", () => {
  alert("Você saiu da conta!");
  closeModal();
});

cancelLink.addEventListener("click", () => {
  closeModal();
});

document.addEventListener("DOMContentLoaded", () => {
  closeModal();
});
