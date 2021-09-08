            /*Definições de variaveis*/
            var js_senha;
            var js_opc;
            var js_documento;
            var js_data;
            var js_valorPago;
            var js_destinatario;
            var js_valorTransferido;

            /* Processamentos de Dados */
            function senha() { 
                js_senha = document.getElementById("fm_senha").value;

            /* Saída de Dados */
                if (js_senha != "1234"){
                    document.write("<br>" + "<br>" + "<h2>" + "Senha Incorreta. Inicie novamente o Atendimento!"  + "</h2>");       
                }
                else if (js_senha == "1234") {
                    js_opc = window.prompt("Escolha Uma Das Opções: \n" + "1- Consultar Saldo. \n" + "2- Realizar pagamento. \n" + "3- Realizar transferência. \n" + "4- Falar com o atendimento.");

                    if (js_opc == 1 ) {
                        document.write("<br>" + "<br>" + "<h2>" + "Saldo: 1.000,00" + "</h2>");
                    } else if (js_opc == 2 ) {
                        js_documento = parseFloat(window.prompt("Digite o nº do documento.")); 
                        js_data = window.prompt("Digite a data de vencimento");
                        js_valorPago = parseFloat(window.prompt("Digite o valor a ser pago"));
                        document.write("<h2>" + "Pagamento realizado com sucesso!" + "</h2>");
                    }
                    else if (js_opc == 3 ) {
                        js_destinatario = window.prompt("Digite o nome do destinatário"); 
                        js_conta = window.prompt("Digite a conta do destinatário");
                        js_data = window.prompt("Digite a data de pagamento");
                        js_valorTransferido = parseFloat(window.prompt("Digite o valor a ser transferido"));
                        document.write("<br>" + "<br>" + "<h2>" + "Transferência realizada com sucesso!" + "</h2>");
                        document.write("<h2>" + "Destinatário: \n" + js_destinatario + "</h2>");
                        document.write("<h2>" + "Conta: \n" + js_conta + "</h2>");
                        document.write("<h2>" + "Data da transferência: \n" + js_data + "</h2>");
                        document.write("<h2>" + "Valor da transferência: \n" + js_valorTransferido + "</h2>");
                    } 
                    else if (js_opc == 4 ) {
                        document.write("<br>" + "<br>" + "<h2>" + "Aguarde o atendimento do consultor" + "</h2>");
                    } 
                    else {
                        document.write("<br>" + "<br>" + "<h2>" + "Operação Inválida" + "</h2>");
                    }
                }
                
            }
