document.getElementById('confirmForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  

  if (!nome || !quantidade) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const numero = '5588999760102'; 
  const mensagem = `Olá! Aqui é ${nome}. Confirmo presença no aniversário da Emylly 🎉`;

  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
});
