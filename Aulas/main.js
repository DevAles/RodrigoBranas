const saldoInicial = 0
const janeiro = new Mes("janeiro");
janeiro.adicionarLancamento(new Lancamento("Salário", "receita", 5000));
janeiro.adicionarLancamento(new Lancamento("Alguel", "despesa", 200));
janeiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 400));
janeiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 500));
janeiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 3000));
janeiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 300));

const fevereiro = new Mes("feveireiro")
fevereiro.adicionarLancamento(new Lancamento("Salário", "receita", 5800));
fevereiro.adicionarLancamento(new Lancamento("Alguel", "despesa", 400));
fevereiro.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 500));
fevereiro.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 600));
fevereiro.adicionarLancamento(new Lancamento("Lazer", "despesa", 4000));
fevereiro.adicionarLancamento(new Lancamento("Transporte", "despesa", 500));

const marco = new Mes("marco")
marco.adicionarLancamento(new Lancamento("Salário", "receita", 6200));
marco.adicionarLancamento(new Lancamento("Alguel", "despesa", 200));
marco.adicionarLancamento(new Lancamento("Conta de Luz", "despesa", 200));
marco.adicionarLancamento(new Lancamento("Conta de Água", "despesa", 200));
marco.adicionarLancamento(new Lancamento("Lazer", "despesa", 1000));
marco.adicionarLancamento(new Lancamento("Transporte", "despesa", 300));

const abril = new Mes("abril")
abril.adicionarLancamento(new Lancamento("Salário", "receita", 9000));

const ano = new Ano();
ano.adicionarMes(janeiro);
ano.adicionarMes(fevereiro);
ano.adicionarMes(marco);
ano.adicionarMes(abril);
ano.calcularSaldo();

janeiro.adicionarLancamento(new Lancamento("Escola", "despesa", 500));
ano.calcularSaldo();

console.log(ano.meses);

function addElement(parent, elementType, text) {
    const element = document.createElement(elementType);
    if (text !== "" && text !== undefined && text !== null)
        element.innerText = text;
    parent.appendChild(element);

}

function rendezirar() {
    const app = document.getElementById("app");
    if (app.firstChild) {
        app.firstChild.remove();
    }

    const painel = document.createElement("div");
    const cores = ["red", "yellow", "green", "blue"]
    const grafico = document.createElement("div")
    grafico.className = "grafico";
    for (const mes of ano.meses) {
        const coluna = document.createElement("div");
        coluna.className = "grafico-coluna";
        const cor = document.createElement("div");
        cor.style.height = 120;
        cor.style.background = cores.pop();
        coluna.appendChild(cor)
        const nomeDoMes = document.createElement("div");
        nomeDoMes.innerText = mes.nome;
        coluna.appendChild(cor);
        coluna.appendChild(nomeDoMes)
        grafico.appendChild(coluna)
    }
    painel.appendChild(grafico);

    for (const mes of ano.meses) {
        addElement(painel, "h4", mes.nome);
        const tableLancamentos = document.createElement("table");
        tableLancamentos.className = "tabela-lancamentos"
        const linhaTitulo = document.createElement("tr");
        addElement(linhaTitulo, "th", "Categoria");
        addElement(linhaTitulo, "th", "Valor");
        tableLancamentos.appendChild(linhaTitulo);
        for (const lancamento of mes.lancamentos) {
            const linhaLancamento = document.createElement("tr");
            addElement(linhaLancamento, "td", lancamento.categoria);
            addElement(linhaLancamento, "td", formatarDinheiro(lancamento.valor));
            tableLancamentos.appendChild(linhaLancamento);

        }
        const linhaJuros = document.createElement("tr");
        addElement(linhaJuros, "th", "juros");
        addElement(linhaJuros, "th", formatarDinheiro(mes.totalizador.juros));
        tableLancamentos.appendChild(linhaJuros);
        const linhaRendimentos = document.createElement("tr");
        addElement(linhaRendimentos, "th", "rendimentos");
        addElement(linhaRendimentos, "th", formatarDinheiro(mes.totalizador.rendimentos));
        tableLancamentos.appendChild(linhaRendimentos);
        const linhaSaldo = document.createElement("tr");
        addElement(linhaSaldo, "th", "Total");
        addElement(linhaSaldo, "th", formatarDinheiro(mes.totalizador.saldo));
        tableLancamentos.appendChild(linhaSaldo);
        painel.appendChild(tableLancamentos);
    }
    app.appendChild(painel);
}
rendezirar();

function adicionarLancamento() {
    const mes = document.getElementById("mes");
    const categoria = document.getElementById("categoria");
    const tipo = document.getElementById("tipo");
    const valor = document.getElementById("valor");
    ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value)));
    ano.calcularSaldo();
    rendezirar()
    document.getElementById("mes").value = ano.meses[0].nome;
    document.getElementById("categoria").value = "receita";
    document.getElementById("tipo").value = "";
    document.getElementById("valor").value = "";
}

const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarLancamento);

const mesSelect = document.getElementById("mes");
for (const mes of ano.meses) {
    const option = document.createElement("option");
    option.text = mes.nome
    mesSelect.add(option);
}