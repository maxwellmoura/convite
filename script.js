document.getElementById('btnConfirmar').addEventListener('click', function () {
  const nome = document.getElementById('nome').value.trim();
 

  if (!nome) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const numero = '5588999760102'; 
  const mensagem = `Olá! Aqui é ${nome}. Confirmo presença no aniversário da Emylly 🎉`;

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

 
  window.location.href = url;
});
