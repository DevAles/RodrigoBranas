class Mes {
  constructor(nome, saldoInicial) {
    if (nome === "") throw new Error("Mês invalido: Nome é Obrigatorio seu otário");
    this.nome = nome
    this.saldoInicial = saldoInicial
    this.totalizadorDoMes = { saldo: 0, saldoInicial, juros: 0, rendimentos: 0, receitas: 0, despesas: 0, distribuicaoDeDespesas: [] };
    this.lancamentos = [];
  }

  adicionarLancamento(lancamento) {
    this.lancamentos.push(lancamento);
  }

  calcularJuros(valor) {
    return arrendondar(valor * 0.1);
  }

  calcularRendimentos(valor) {
    const rendimentos = arrendondar(valor * 0.25)
    console.log(rendimentos)
    return rendimentos;
  }

  distribuirDespesas() {
    const distribuicaoDeDespesas = [];
    for (const lancamento of this.lancamentos) {
      if (lancamento.tipo === "despesa") {
        const percentual = arrendondar((lancamento.valor / this.totalizadorDoMes.despesas) * 100);
        console.log(lancamento.categoria, percentual)
        distribuicaoDeDespesas.push({ categoria: lancamento.categoria, percentual });
      }
    }
    this.totalizadorDoMes.distribuicaoDeDespesas = distribuicaoDeDespesas
  }
  apurarJuros() {
    if (this.totalizadorDoMes.saldo < 0) {
      this.totalizadorDoMes.juros = this.calcularJuros(this.totalizadorDoMes.saldo);
      this.totalizadorDoMes.saldo = arrendondar(this.totalizadorDoMes.saldo + this.totalizadorDoMes.juros);
    }
  }

  apurarRendimentos() {
    if (this.totalizadorDoMes.saldo > 0) {
      this.totalizadorDoMes.rendimentos = this.calcularRendimentos(this.totalizadorDoMes.saldo);
      this.totalizadorDoMes.saldo = arrendondar(this.totalizadorDoMes.saldo + this.totalizadorDoMes.rendimentos);
    }
  }

  calcularSaldo() {
    this.totalizadorDoMes.saldo = this.saldoInicial;
    this.apurarReceitas();
    this.apurarDespesas();
    this.distribuirDespesas();
    this.apurarJuros(); 
    this.apurarRendimentos();
  }
apurarReceitas (){
  for (const lancamento of this.lancamentos) {
    if (lancamento.tipo === "receita") {
      this.totalizadorDoMes.saldo += lancamento.valor;
      this.totalizadorDoMes.receitas += lancamento.valor;
    }
  }
}
apurarDespesas(){
  for (const lancamento of this.lancamentos) {
    if (lancamento.tipo === "despesa") {
      this.totalizadorDoMes.saldo -= lancamento.valor;
      this.totalizadorDoMes.despesas += lancamento.valor;
    }
  }
}
}

