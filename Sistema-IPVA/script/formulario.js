var dados = [];

        $("#btnSalvar").click(function () {
            var data = document.getElementById("idData");
            var dataAtual = new Date(), data = new Date(document.getElementById("idData").value);
            var codigo = document.getElementById("idCodigo").value;
            var modelo = document.getElementById("idModeloVeiculo");
            var fabricante = document.getElementById("idFabricante");
            var cidade = document.getElementById("idCidade");
            var valorDaFipe = document.getElementById("idValorFIPE").value;
            var valorDoIPVA = 0;

            if (codigo > 1 && codigo < 100000) {
                if (modelo.value.length >= 3) {
                    if (fabricante != "Selecione") {
                        if (dataAtual > data) {
                            if (cidade.value != "Selecione") {
                                if (document.getElementById("idSemDebitos").checked || document.getElementById("idComDebitos").checked) {
                                    if (valorDaFipe > 0) {
                                        alert('Dados Corretos.');

                                        var formula = valorDaFipe * 0.03;
                                        valorDoIPVA = formula;
                                        document.getElementById("idValorIPVA").value = valorDoIPVA.toFixed(2);

                                        if (valorDoIPVA > 500) {
                                            var tabela = document.getElementById("tabelaVeiculos");

                                            var linha = tabela.insertRow(tabela.rows.length);

                                            var celula0 = linha.insertCell(0);
                                            celula0.innerHTML = codigo;

                                            var celula1 = linha.insertCell(1);
                                            celula1.innerHTML = document.getElementById("idData").value;

                                            var celula2 = linha.insertCell(2);
                                            celula2.innerHTML = "R$" + valorDoIPVA.toFixed(2);

                                            
                                        } else {
                                            alert('Valor Insuficiente!');
                                        }
                                        document.getElementById("idValorIPVA").value = valorDoIPVA.toFixed(2);

                                    } else {
                                        alert('Aceitamos apenas valores positivos no valor da fipe.');
                                    }
                                } else {
                                    alert('Selecione uma das seguintes opções: com débitos ou sem débitos.');
                                }
                            } else {
                                alert('Selecione uma cidade.')
                            }
                        } else {
                            alert('Informe uma data válida!');
                        }
                    } else {
                        alert('Selecione um fabricante');
                    }
                } else {
                    alert('Modelo deve ter no minímo 3 caracters');
                }

            } else {
                alert('Código deve ter valor entre 1 e 100.000.');
            }
        });


        $("#btnLimpar").click(function () {
            document.getElementById("idCodigo").value = "";
            document.getElementById("idData").value = "";
            document.getElementById("idCidade").value = "Selecione";
            document.getElementById("idModeloVeiculo").value = "";
            document.getElementById("idFabricante").value = "Selecione";
            document.getElementById("idSemDebitos").checked = false;
            document.getElementById("idComDebitos").checked = false;
            document.getElementById("idOpcionadoAr").checked = false;
            document.getElementById("idOpcionadoDirecao").checked = false;
            document.getElementById("idOpcionadoVidros").checked = false;
            document.getElementById("idValorFIPE").value = "";
            document.getElementById("idValorIPVA").value = "";
        })


        function editar(indice) {

            document.getElementById("idCodigo").value = dados[indice].codigo;
            document.getElementById("idData").value = dados[indice].data;
            document.getElementById("idValorIPVA").value = dados[indice].valorDoIPVA;

        }

        function limpaTabela() {

            var tabela = document.getElementById("tabelaVeiculos");
            var qtd_rows = tabela.rows.length;

            for (var i = 1; i < qtd_rows; i++) {

                tabela.deleteRow(1);

            }

        }

        function remover(indice) {
            dados.splice(indice, 1);

            limpaTabela();
        }

        $("#btnEditar").click(function () {
            editar();
            remover();
            limpaTabela();
        })