const saldoInicial = 0
    const janeiro = new Mes("janeiro", saldoInicial);
    janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 5000));
    janeiro.adicionarLancamento(new Lancamento("Alguel", "despesa", 200));
    janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 400));
    janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 500));
    janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 3000));
    janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 300));
    janeiro.calcularSaldo();
    console.log(janeiro);
    const fevereiro = new Mes("feveireiro", janeiro.totalizadorDoMes.saldo)
    fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 5800));
    fevereiro.adicionarLancamento(new Lancamento("Alguel", "despesa", 400));
    fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 500));
    fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 600));
    fevereiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 4000));
    fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 500));
    fevereiro.calcularSaldo();
    console.log(fevereiro);
    const marco = new Mes("marco", fevereiro.totalizadorDoMes.saldo)
    marco.adicionarLancamento(new Lancamento("Salário", "receita", 6200));
    marco.adicionarLancamento(new Lancamento("Alguel", "despesa", 200));
    marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
    marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 200));
    marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 1000));
    marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 300));
    marco.calcularSaldo();
    console.log(marco)
    const acumuladoAno = marco.totalizadorDoMes.saldo
 