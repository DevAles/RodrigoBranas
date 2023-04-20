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
    if (app.firstChild){
        app.firstChild.remove();
    }
    const painel = document.createElement("div");
    for (const mes of ano.meses) {
        addElement(painel, "h3", mes.nome);
        for (const lancamento of mes.lancamentos) {

            const detalhesLancamento = lancamento.tipo + " " + lancamento.categoria + " " + lancamento.valor;
            addElement(painel, "p", detalhesLancamento);

        }
        addElement (painel, "h4", mes.totalizador.saldo);
        addElement (painel, "hr")
    }
app.appendChild(painel);
}

rendezirar();


function adicionarLancamento () {
    const mes = document.getElementById("mes");
    const categoria = document.getElementById("categoria");
    const tipo = document.getElementById("tipo");
    const valor = document.getElementById("valor");  
    ano.adicionarLancamento(mes.value, new Lancamento(categoria.value, tipo.value, parseFloat(valor.value)));
    ano.calcularSaldo();
    rendezirar()
    document.getElementById("mes").value ="";
    document.getElementById("categoria").value ="";
    document.getElementById("tipo").value ="";
    document.getElementById("valor").value ="";
}

const botao = document.getElementById("botao");
botao.addEventListener("click", adicionarLancamento);  