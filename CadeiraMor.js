function bt_conferir() {
    var nome = ipt_nome.value
    var loja = Number(ipt_loja.value)
    var conta = Number(ipt_conta.value)
    var digito = Number(ipt_digito.value)
    var resto = conta % loja

    if (loja <= 0 || loja > 10) {
        alert("Loja Inválida");
        window.location.href = "CadeiraMor.html";

    }
    if (conta <= 0) {
        alert("Conta Inválida");
        window.location.href = "CadeiraMor.html";
    }
    if (resto < 3) {
    }
    if (resto > 3 && resto <= 6) {
    }
    if (resto > 6) {
    }
    if (digito <= 3) {
    }
    else {
        alert("Digito Inválido")
        window.location.href = "CadeiraMor.html";
    }
    if(nome == ""){
        alert("Insira o seu nome de login")
        window.location.href = "CadeiraMor.html";
       
    }else{
        msg_conta.innerHTML = `Olá cliente ${nome} entre com a sua senha para a Conta ${conta} da Loja ${loja}`;
    }
    div_conta.style.display = `block`;
    login.style.display = `none`;
    
}

function bt_limpar() {
    ipt_password.value = ""
}
var tentativas = 0

function bt_entrar() {
    var password = ipt_password.value
    var digito = Number(ipt_digito.value)

    if (digito == 1 && password == "recife") {
        div_conta.style.display = 'none';
        produto1.style.display = 'block';
    }
    else if (digito == 2 && password == "manaus") {
        div_conta.style.display = 'none';
        produto1.style.display = 'block';
    }
    else if (digito == 3 && password == "fortaleza") {
        div_conta.style.display = 'none';
        produto1.style.display = 'block';
    } else {
        tentativas++
        span_tentativas.innerHTML = `Tentativas: ${tentativas}`
    }
    if (tentativas == 4) {
        alert("Você excedeu o número de tentativas, sua conta está bloqueada, PROCURE O SUPORTE")
        window.location = 'CadeiraMor.html';
    }
}
function cadeira() {
    imagem.innerHTML = ``
    var cadeiras = Number(sel_cadeira.value)
    if (cadeiras == 1) {
        imagem.innerHTML =
        `<img style="height: 150px;" src="https://d365e82sgxmduv.cloudfront.net/Custom/Content/Products/10/87/1087201_cadeira-de-praia-alta-em-aco-cores-sortidas-2002-mor_m2_637339700492976376.jpg" alt="cadeira de praia"><br>
        <select id="sel_material">
        <option value="1">Alumínio</option>
        <option value="2">Plástico</option>
        <option value="3">Ferro</option>
        </select>
        <br>
        <input type="text" id="ipt_qnt" placeholder="Quantidade de Cadeiras"><br>
        <button onclick="praia_calcular()">Calcular</button>
        <div id="orcamento"></div>`;
    }
    if (cadeiras == 2) {
        imagem.innerHTML =
            `<img style="height: 150px;" src="https://cdn.leroymerlin.com.br/products/cadeira_de_jardim_marrom_em_aluminio_e_textilene_thct_1566702954_0cf4_600x600.jpeg"><br>
        <select id="sel_material">
        <option value="1">Alumínio</option>
        <option value="2">Plástico</option>
        <option value="3">Ferro</option>
        </select>
        <br>
        <input type="text" id="ipt_qnt" placeholder="Quantidade de Cadeiras"><br>
        <button onclick="jardim_calcular()">Calcular</button>
        <div id="orcamento"></div>`;
    }
}
function praia_calcular() {
    orcamento.innerHTML = ``
    var qnt = Number(ipt_qnt.value)
    var material = Number(sel_material.value)
    var praia_alu = qnt * 75
    var praia_plas = qnt * 50
    var praia_fer = qnt * 80
    var desc1_alu = praia_alu * 3 /100
    var desc1_plas = praia_alu * 5 /100
    var desc1_fer = praia_alu * 3.5 /100


    if (material == 1) {
        orcamento.innerHTML = `O orçamento para a compra de ${qnt} 
        Cadeiras de Praia
        de Aluminío é: R$${praia_alu} <br>
        Para pagamento a vista o desconto de 3%
        é :R$${desc1_alu}<br>
        Ficará por R$:${praia_alu - desc1_alu}`
    }
    if (material == 2) {
        orcamento.innerHTML = `O orçamento para a compra de ${qnt}
        Cadeiras de Praia
        de Plástico é: R$${praia_plas}<br>
        Para pagamento a vista o desconto de 5%
        é :R$${desc1_plas} <br>
        Ficará por R$:${praia_plas - desc1_plas}`
    }
    if (material == 3) {
        orcamento.innerHTML = `O orçamento para a compra de ${qnt}
        Cadeiras de Praia
        de Ferro é: R$${praia_fer} <br>
        Para pagamento a vista o desconto de 3,5%
        é :R$${desc1_fer}<br>
        Ficará por R$:${praia_fer - desc1_fer}`
    }
}
function jardim_calcular() {
    orcamento.innerHTML = ``
    var qnt = Number(ipt_qnt.value)
    var material = sel_material.value
    var jar_alu = qnt * 70
    var jar_plas = qnt * 35
    var jar_ferro = qnt * 55
    var desc2_alu = jar_alu * 3 /100
    var desc2_plas = jar_alu * 5 /100
    var desc2_fer = jar_alu * 3.5 /100

    if (material == 1) {
        orcamento.innerHTML = `O orçamento para a compra de ${qnt} 
        Cadeiras de Praia
        de Aluminío é: R$${jar_alu} <br>
        Para pagamento a vista o desconto de 3%
        é :R$${desc2_alu}<br>
        Ficará por R$:${jar_alu - desc2_alu}`
    }
    if (material == 2) {
        orcamento.innerHTML = `O orçamento para a compra de ${qnt}
        Cadeiras de Praia
        de Plástico é: R$${jar_plas}<br>
        Para pagamento a vista o desconto de 5%
        é :R$${desc2_plas} <br>
        Ficará por R$:${jar_plas - desc2_plas}`
    }
    if (material == 3) {
        orcamento.innerHTML = `O orçamento para a compra de ${qnt}
        Cadeiras de Praia
        de Ferro é: R$${jar_ferro} <br>
        Para pagamento a vista o desconto de 3,5%
        é :R$${desc2_fer}<br>
        Ficará por R$:${jar_ferro - desc2_fer}`
    }
}


