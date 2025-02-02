$(document).ready(function() { //Primeiro carrega os elementos HTML e quando o documento (página) estiver pronto em termos de HTML, o script tornar-se-á devidamente funcional.

    // 3 depósitos que vão se gastando conforme quisermos CAFÉ, CHÁ ou ÁGUA.
    var agua = 0;
    var cha = 0;
    var cafe = 0;

    // Eventos dos botões
    $("#btnAgua").click(function() {
        atualizaAgua(1);
    });

    $("#btnCafe").click(function() {
        atualizaCafe(1);
    });

    $("#btnCha").click(function() {
        atualizaCha(1);
    });

    $("#btnCafeLongo").click(function() {
        if (agua >= 2 && cafe >= 1) {  // Verifica se há pelo menos 2 unidades de água e 1 de café
            atualizaAgua(2);
            atualizaCafe(1);
            alert("Café Longo tirado com sucesso!");
        } else {
            alert("Ingredientes insuficientes para um Café Longo!");
        }
    });

    // BOTÕES DE REPOSIÇÃO
    $("#reporAgua").click(function() {
        agua += 20;
        atualizaContador(agua, "agua_agua");
    });

    $("#reporCafe").click(function() {
        cafe += 10;
        atualizaContador(cafe, "cafe_cafe");
    });

    $("#reporCha").click(function() {
        cha += 10;
        atualizaContador(cha, "cha_cha");
    });

    // Funções de Atualização dos Depósitos
    function atualizaAgua(unidades) {
        if (agua >= unidades) {
            agua -= unidades;
            atualizaContador(agua, "agua_agua");
        } else {
            alert("Água insuficiente!");
        }
    }

    function atualizaCafe(unidades) {
        if (cafe >= unidades) {
            cafe -= unidades;
            atualizaContador(cafe, "cafe_cafe");
            atualizaAgua(unidades);
        } else {
            alert("Café insuficiente!");
        }
    }

    function atualizaCha(unidades) {
        if (cha >= unidades) {
            cha -= unidades;
            atualizaContador(cha, "cha_cha");
            atualizaAgua(unidades);
        } else {
            alert("Chá insuficiente!");
        }
    }

    function atualizaContador(valor, contador) {
        $("#" + contador).html(valor);
    }

});
