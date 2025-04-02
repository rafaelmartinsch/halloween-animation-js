function obterNovaPosicao() {
  const alturaJanela = window.innerHeight - 44;
  const larguraJanela = window.innerWidth - 44;
  
  const novaAltura = Math.floor(Math.random() * alturaJanela);
  const novaLargura = Math.floor(Math.random() * larguraJanela);
  
  return [novaAltura, novaLargura];
}

function calcularVelocidade(posicaoAntiga, novaPosicao) {
  const diferencaX = Math.abs(posicaoAntiga[1] - novaPosicao[1]);
  const diferencaY = Math.abs(posicaoAntiga[0] - novaPosicao[0]);
  const maiorDistancia = Math.max(diferencaX, diferencaY);
  
  const fatorVelocidade = 0.1; // Ajuste esse valor para modificar a velocidade
  return Math.ceil(maiorDistancia / fatorVelocidade);
}

function animarIcone() {
  const icone = document.getElementById('icone-flutuante');
  const novaPosicao = obterNovaPosicao();
  const posicaoAtual = [icone.offsetTop, icone.offsetLeft];
  const velocidade = calcularVelocidade(posicaoAtual, novaPosicao);

  icone.style.transition = `transform ${velocidade}ms linear`;
  icone.style.transform = `translate(${novaPosicao[1]}px, ${novaPosicao[0]}px)`;
  
  setTimeout(animarIcone, velocidade); // Remove a pausa extra antes do próximo movimento
}

animarIcone(); // Inicia a animação imediatamente