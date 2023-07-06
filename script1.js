<script>
        function checkFields() {
            var text1 = document.getElementById("text1").value;
            var text2 = document.getElementById("text2").value;

            if (text1 === '' || text2 === '') {
                alert("Preencha os campos Nome e CPF");
            } else {
                redirectToPage2(); //vai para a tela logado.html aqui ussei o // para bugar o script, dentro do script melhor usar // p comentar
            }
        }

        function redirectToPage1() {
            window.location.href = "app.html";
        }

        function redirectToPage2() {
            window.location.href = "logado.html";
        }

        function redirectToPage3() {
            window.location.href = "cadastro.html";
        }

        function redirectToPage4() {
            window.location.href = "pagamento.html";
        }    
         
        function redirectToPage5() {
            window.location.href = "consultar.html";
        }   

        function redirectToPage6() {
            window.location.href = "index.html";
        }  

        function redirectToPage7() {
            window.location.href = "pagconfirmado.html";
        }  

        function redirectToPage8() {
            window.location.href = "calen.html";
        }  

        function redirectToPage9() {
            window.location.href = "cadcon.html";
        } 

    </script>
