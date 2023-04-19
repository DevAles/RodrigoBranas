class Mes {
  constructor(nome, saldoInicial) {
    if (nome === "") throw new Error("Mês invalido: Nome é Obrigatorio seu otário");
    this.nome = nome
    this.saldoInicial = saldoInicial
    this.totalizador = { saldo: 0, saldoInicial, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] };
    this.lancamentos = [];
  }

  adicionarLancamento(lancamento) {
    this.lancamentos.push(lancamento);
  }

  
  calcularSaldo() {
    this.totalizador.saldo = this.saldoInicial;
    this.apurarReceitas();
    this.apurarDespesas();
    this.distribuirDespesas();
    this.apurarJuros();
    this.apurarRendimentos();
  }

  apurarReceitas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "receita") {
        this.totalizador.saldo += lancamento.valor;
        this.totalizador.receitas += lancamento.valor;
      }
    }
  }

  apurarDespesas() {
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "despesa") {
        this.totalizador.saldo -= lancamento.valor;
        this.totalizador.despesas += lancamento.valor;
      }
    }
  }
  distribuirDespesas() {
    const distribuicaoDeDespesas = [];
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "despesa") {
        const percentual = arrendondar((lancamento.valor / this.totalizador.despesas) * 100);
        console.log(lancamento.categoria, percentual)
        distribuicaoDeDespesas.push({ categoria: lancamento.categoria, percentual });
      }
    }
    this.totalizador.distribuicaoDeDespesas = distribuicaoDeDespesas
  }
  calcularJuros(valor) {
    return arrendondar(valor * 0.1);
  }

  apurarJuros() {
    if (this.totalizador.saldo < 0) {
      this.totalizador.juros = this.calcularJuros(this.totalizador.saldo);
      this.totalizador.saldo = arrendondar(this.totalizador.saldo + this.totalizador.juros);
    }
  }

  calcularRendimentos(valor) {
    const rendimentos = arrendondar(valor * 0.25)
    return rendimentos;
  }

  apurarRendimentos() {
    if (this.totalizador.saldo > 0) {
      this.totalizador.rendimentos = this.calcularRendimentos(this.totalizador.saldo);
      this.totalizador.saldo = arrendondar(this.totalizador.saldo + this.totalizador.rendimentos);
    }
  }

}

