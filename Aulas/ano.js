class Ano {
  constructor() {
    this.meses = [];
    this.total = 0;
  }

  adicionarMes(mes) {
    this.meses.push(mes);
  }

  adicionarLancamento(nomeDoMes, lancamento) {
    for (const mes of this.meses) {
      if (mes.nome === nomeDoMes) {
        mes.adicionarLancamento(lancamento);
        break;
      }
    }
  }
  calcularSaldo() {
    let saldoInicial = 0;
    for (const mes of this.meses) {
      mes.saldoInicial = saldoInicial;
      mes.calcularSaldo();
      saldoInicial = mes.totalizador.saldo;
    }
  }
  calcularTotal() {
    let total = 0;
    for (const mes of this.meses) {
      total += mes.totalizador.saldo;
    }
    this.total = total;
  }
}

