$(document).ready(function () {
    var agua = 40;
    var cha = 20;
    var cafe = 20;

    atualizaContador(agua, "agua");
    atualizaContador(cha, "cha");
    atualizaContador(cafe, "cafe");

    // Botões de reposição
    $("#btnReporAgua").click(function () {
        atualizaAgua(20);
    });

    $("#btnReporCafe").click(function () {
        atualizaCafe(10);
    });

    $("#btnReporCha").click(function () {
        atualizaCha(10);
    });

    // Botões para tirar bebidas
    $("#btnAgua").click(function () {
        if (agua <= 0) {
            alert("Não tem água");
        } else {
            atualizaAgua(-1);
        }
    });

    $("#btnCafe").click(function () {
        if (cafe <= 0 || agua <= 0) {
            alert("Não tem café ou água suficiente");
        } else {
            atualizaCafe(-1);
        }
    });

    $("#btnCafeLongo").click(function () {
        if (cafe <= 0 || agua < 2) {
            alert("Não tem café ou água suficiente para um café longo");
        } else {
            atualizaCafe(-1, 1);
        }
    });

    $("#btnCha").click(function () {
        if (cha <= 0 || agua <= 0) {
            alert("Não tem chá ou água suficiente");
        } else {
            atualizaCha(-1);
        }
    });

    // Funções para atualizar os depósitos
    function atualizaAgua(unidades) {
        agua += unidades;
        atualizaContador(agua, "agua");
    }

    function atualizaCafe(unidades, longo = 0) {
        cafe += unidades;
        atualizaContador(cafe, "cafe");

        if (unidades < 0) {
            atualizaAgua(unidades * (longo === 0 ? 1 : 2));
        }
    }

    function atualizaCha(unidades) {
        cha += unidades;
        atualizaContador(cha, "cha");

        if (unidades < 0) {
            atualizaAgua(unidades);
        }
    }

   function atualizaContador(valor,contador)
    {
        var label="";
        switch(contador)
        {
            case "agua":
                label="<b>Água</b><label>(" + valor + ")</label>";
                break;
            case "cha":
                label="<b>Chá</b><label>(" + valor + ")</label>";
                break;
            case "cafe":
                label="<b>Café</b><label>(" + valor + ")</label>"
                break;
        }
        $("#" + contador).html(label);
        if(valor <=0)
        {
            $("#" + contador).attr("class","nostock");
        }
        else
        {
            $("#" + contador).attr("class","");
        }
    }
});

