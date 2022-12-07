// classe = funcao construtora
//Super class
//criando constructor function para conta
//onde temos com aributos agencia, conta e saldo
// *************************************Conta usuario ********************************************************
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

// ********************Sacar*********************
//prototype de conta temos sacar onde e passado pelo usuario o valor 
// e verificado se o saldo e menor que o valor retornando saldo insuficiente e caso contrario
// realiza o saque e mostra o saldo chamando a funcao versaldo()
Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
}

//* ****************depositar********************
//Prototype de Conta passa o valor para o metodo depositar
// soma ao saldo o valor passado para deposito 
//retorna chamando a funcao ver saldo com o valor atualizado
Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
}

// *******************ver Saldo *************************
// apenas mostra para o usuario a agencia a conta e o saldo atual
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c ${this.agencia} / ${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`);
}

//atribuicao da fabrica conta a constante conta
const conta1 = new Conta(5326, 56987, 1000); 
console.log(conta1); // mostra o que a constructor function Conta dentro de conta1 Conta 
                    //  { agencia: 5326, conta: 56987, saldo: 1000 }
conta1.depositar(50); // deposita 50 reais => Ag/c 5326 / 56987 | Saldo: R$1050.00
conta1.sacar(999); // saca 999 reais => Ag/c 5326 / 56987 | Saldo: R$51.00
conta1.sacar(51.30) //sacar 51,30 reais => Saldo insuficiente: 51

console.log()

// ************************Criacao de conta corrente => constructor function************************************

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); // herda de Conta agencia, conta e saldo
    this.limite = limite; // cria atributo limite
}

// parametros para criar dentro de conta corrente o protoype de Conta
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente; // define que ContaCorrente sera o constructor
//Sobrescreve o metodo sacar  dando novas funcoes para conta corrente.
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    this.verSaldo()
}

const cc = new ContaCorrente(11, 22, 0, 100);
cc.depositar(10); //Ag/c 11 / 22 | Saldo: R$10.00
cc.sacar(100);  // Ag/c 11 / 22 | Saldo: R$-90.00
cc.sacar(20);  //  Saldo insuficiente -90

console.log()

// **************************ContaPoupanca*********************************************

function ContaPoupanca(agencia, conta, saldo){
    Conta.call(this, agencia, conta,saldo); //herda de Conta => agencia, conta, saldo    
}

// crea objeto e transforma em construtor
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

//Podemos observar que ao criar o prototype de Conta ela não e modificada, mesmo que conta corrente utilizou e sobrescreveu
// chamamos isto de polimorfismo.

const cp = new ContaPoupanca(11, 22, 0, 100); // conta poupanca
cp.depositar(200); //Ag/c 11 / 22 | Saldo: R$200.00
cp.sacar(190);  //Ag/c 11 / 22 | Saldo: R$10.00
cp.sacar(20); //Saldo insuficiente: 10