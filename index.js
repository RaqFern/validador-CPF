

    function validarCPF() {
       
        // Recebe o CPF informado na página HTML
        var cpf = String(document.getElementById("cpf").value);
       
        var soma = 0; 

        //laço de repetição//

        for (i=0; i<=8; i++) {

            soma += cpf [i] * (10-i);         

        }
        // % retorna o resto da divisão // 
        
        var calcDV1 = 11 - (soma % 11);

        soma = 0;

            for (i=0; i<=9; i++) {
                soma += cpf [i] * (11-i);
            }
        
        var calcDV2 = 11 - (soma % 11); 
        
        if (cpf[9]==calcDV1 && cpf[10]==calcDV2) {

            alert("CPF é válido."); 

        } else {

            alert("CPF inválido."); 
        }
    }

