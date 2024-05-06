function calcularConsumo() {
    const tipoVeiculo = document.getElementById('tipo').value;
    const distanciaPercorrida = parseFloat(document.getElementById('distancia').value);
    const litrosAbastecidos = parseFloat(document.getElementById('litros').value);
  
    let consumoMedio;
  
    if (tipoVeiculo === 'carro') {
      consumoMedio = distanciaPercorrida / litrosAbastecidos * 0.85; // Fator de ajuste para carros
    } else if (tipoVeiculo === 'moto') {
      consumoMedio = distanciaPercorrida / litrosAbastecidos * 0.7; // Fator de ajuste para motos
    } else if (tipoVeiculo === 'caminhonete') {
      consumoMedio = distanciaPercorrida / litrosAbastecidos * 0.9; // Fator de ajuste para caminhonetes
    } else if (tipoVeiculo === 'caminhao') {
      consumoMedio = distanciaPercorrida / litrosAbastecidos; // Sem fator de ajuste para caminhões
    } else {
      // Tipo de veículo inválido
      alert('Tipo de veículo inválido. Selecione uma opção válida.');
      return;
    }
  
    // Validação de dados
    if (isNaN(consumoMedio) || distanciaPercorrida <= 0 || litrosAbastecidos <= 0) {
      alert('Preencha todos os campos com valores válidos. Distância e litros devem ser maiores que zero.');
      return;
    }
  
    // Exibir o resultado formatado com duas casas decimais
    const consumoMedioFormatado = consumoMedio.toFixed(2);
    document.getElementById('consumoMedio').textContent = consumoMedioFormatado;
  }
  