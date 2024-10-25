// definindo uma classe
class heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo 
    }

    atacar(){
        let ataque 

        switch(this.tipo){
            case "mago":
                ataque = "magia"
                break

            case "guerreiro ":
                 ataque = "espada"
                 break;
            
            case "monge":
                ataque = "artes-marciais"
                break

            case "ninja":
                ataque = "shurikens"
                break
            default: ataque = "realizou o ataque"
        }
    console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}
//criando instancia 
const heroi1 = new heroi("shythor",20, "mago");
const heroi2 = new heroi("dydie", 21, "guerreiro");
const heroi3 = new heroi("hells", 35, "monge");
const heroi4 = new heroi("shyan", 40, "ninja");

//!chamando pelo atq
heroi1.atacar(0)
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()