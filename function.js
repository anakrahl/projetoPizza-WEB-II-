var aguardando = 0;
var emPreparo = 0;
var pronto = 0;
function atualizarStatusPedido() {
    const statusDoPedido = document.getElementById("status-pedido").value;
    if (statusDoPedido == 'Aguardando...') {
        aguardando++;
    } else if (statusDoPedido == 'Em preparo') {
        emPreparo++;
    } else if (statusDoPedido == 'Pronto') {
        pronto++;
    }
    document.getElementById('statusPedido').innerHTML = `${aguardando} ${emPreparo} ${pronto}`
}


function alterarVisib() {
    var tamanhoPizza = document.getElementById('tamanhos').value;
    var sabor1 = document.getElementById('sabor1');
    var sabor2 = document.getElementById('sabor2');
    var sabor3 = document.getElementById('sabor3');

    if (tamanhoPizza === 'Pequena') {
        alert("Você pode escolher apenas 1 sabor");
        sabor2.value = '';
        sabor3.value = '';
        sabor2.setAttribute('hidden', true);
        sabor3.setAttribute('hidden', true);
    } else if (tamanhoPizza === 'Media') {
        alert("Você só pode escolher 2 sabores");
        sabor2.removeAttribute('hidden');
        sabor3.setAttribute('hidden', true);
    } else if (tamanhoPizza === 'Grande') {
        alert("Você pode escolher 3 sabores");
        sabor2.removeAttribute('hidden');
        sabor3.removeAttribute('hidden');
    } else {
        alert("Selecione um tamanho de pizza");
    }
}

function formulario() {
    var tamanhoPizza = document.getElementById('tamanhos').value;
    var bordaSim = document.getElementById('com-borda').checked;
    var bordaNao = document.getElementById('sem-borda').checked;
    var sabor1 = document.getElementById('sabor1').value;
    var sabor2 = document.getElementById('sabor2').value;
    var sabor3 = document.getElementById('sabor3').value;
    var statusPedido = document.getElementById('status-pedido').value;

    const SelecBorda = bordaSim ? "Sim" : bordaNao ? "Não" : "Nenhuma opção foi selecionada";

    if (tamanhoPizza !== 'Pequena' && tamanhoPizza !== 'Media' && tamanhoPizza !== 'Grande') {
        alert('Selecione o tamanho da pizza');
        return false;
    }
    if (statusPedido !== 'Em preparo' && statusPedido !== 'Aguardando...' && statusPedido !== 'Pronto') {
        alert('Selecione o status do pedido');
        return false;
    }

    if (bordaSim && bordaNao == true || SelecBorda === "Nenhuma opção foi selecionada") {
        alert('Selecione 1 opção de borda');
        return false;
    }
    if (tamanhoPizza === '' || sabor1 === '' || statusPedido === '') {
        alert("Preencha todos os campos obrigatórios");
    } else {
        alert(`Seu pedido foi enviado!\nTamanho: ${tamanhoPizza}\nCom bordas?: ${SelecBorda}\nSabor 1: ${sabor1}\nSabor 2: ${sabor2}\nSabor 3: ${sabor3}\nStatus: ${statusPedido}`);
    }
    atualizarStatusPedido();

}