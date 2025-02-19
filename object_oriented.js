//Formas de DEFINIR OBJETOS//

const individuo = { //O 'individuo' será um objeto com as propriedades de nome, apelido, idade e cor dos olhos. Sendo 'const' não pode ser alterável durante o resto do código.

    Nome:"Sergio"
    ,Apelido:"Fontes"
    ,Idade:30
    ,Olhos:"Castanhos"

}


//Definir uma classe para construir os objetos
class Individuo{

    constructor(nome,apelido){//A funcção construtora irá construir o objeto com base nas suas propriedades/atributos.

        this.Nome = nome; //Atribuir os atributos do objeto às respetivas propriedades da classe desse objeto.
        this.Apelido = apelido;
        this.Idade = 0;
        this.Olhos ="";

    } 


    //Devolver o nome completo de cada instancia de objeto de individuo...
    NomeCompleto(){

        return this.Nome + " " + this.Apelido;

    }

}