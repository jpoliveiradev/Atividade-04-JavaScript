
    /*Definições de variaveis*/
    var js_nome;
    var js_sobrenome;
    var js_n1;
    var js_n2;
    var js_n3;
    var js_n4;
    var js_media1;
    var js_media2;

    /* Processamentos de Dados */
    function resultadoDeTudo(){
        js_nome = document.getElementById("js_nome").value;
        js_sobrenome = document.getElementById("js_sobrenome").value;
        js_n1 = parseFloat(document.getElementById("js_n1").value);
        js_n2 = parseFloat(document.getElementById("js_n2").value);
        js_n3 = parseFloat(document.getElementById("js_n3").value);
        js_n4 = parseFloat(document.getElementById("js_n4").value);
        alert("Olá " + js_nome + " " + js_sobrenome);
        alert("Suas Notas São: \n" + "1º nota: " + js_n1 + " ;\n" + "2º nota: " + js_n2 + " ;\n" +  "3º nota: " + js_n3 + " ;\n" +  "4º nota: " + js_n4 + ";");
        js_media1 = parseFloat((js_n1 + js_n2 + js_n3 + js_n4)/4 );
        alert("A Sua Média é: " + js_media1); 

        /* Saída de Dados */
        if(js_media1 >= 9){
            document.write("<br>" + "<br>" + "<h2>" + "Aluno Aprovado com Louvor!" + "</h2>");

        }
        else if(js_media1 >= 8 && js_media1 < 9){
            document.write("<br>" + "<br>" + "<h2>" + "Aluno Aprovado com Sucesso!" + "</h2>");
            
        }
        else if(js_media1 >= 7 && js_media1 < 8){
            document.write("<br>" + "<br>" + "<h2>" + "Aluno Aprovado!");
        }
        else if(js_media1 < 7){
            alert("Aluno de Recuperação!");
            js_media2 = parseFloat( +prompt("Informe qual é sua nota de recuperação: " , "Digite aqui"));
            js_media2 = parseFloat(js_media1 + js_media2)/2 ;
            alert("A Sua Média de Recuperação é: " + js_media2);
        
            if (js_media2 >= 6 ){
                document.write("<br>" + "<br>" + "<h2>" + "Aluno Aprovado!" + "</h2>");
            }
            else {
                document.write("<br>" + "<br>" + "<h2>" + "Aluno Reprovado!" + "</h2>");
            }
        }

    }
    
