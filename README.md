#Regras de Negócio

Regras a Considerar:
-Como estamos no Brasil, todos os cálculos de distância devem partir daqui.
-É necessário ter pelo menos 10 destinos pré-cadastrados com suas respectivas distâncias.
-Deve-se calcular a distância até o destino escolhido.
-Para distâncias acima de 2000 km, serão necessários dois voos.
-Se o voo for marcado para menos de 2 meses a partir da data atual, o custo será de 1500 reais (considerando ida e volta).
-Se o voo for marcado para 2 meses ou mais a partir da data atual, o custo será de 700 reais (considerando ida e volta).
-Para distâncias acima de 2000 km, cada quilômetro adicional custará 1 real a mais no total.
-Cada semana de estadia terá um custo de 400 reais em uma estalagem padrão, ou 700 reais em uma estalagem de luxo.
-Cada participante adicional adiciona 25% aos custos de estalagem.
-Durante a escolha do destino, número de participantes, tipo de estalagem e datas de ida e volta, o subtotal da compra será atualizado automaticamente, exibindo os critérios detalhados.
-Após a seleção da viagem, datas e número de participantes, o usuário será redirecionado para a tela de pagamento e fechamento do pedido, onde serão exibidos os critérios detalhados, o total a ser pago, e os métodos de pagamento disponíveis: pix ou cartão de crédito.

Considerações:
-O número de destinos pré-cadastrados foi aumentado de 3 para 10.
-Uso de commits para salvar o progresso do projeto. Commits parciais foram usados para salvar arquivos específicos.
-O comando git reset --hard foi mencionado como uma forma de apagar todas as informações salvas nos commits anteriores, mas deve ser usado com cautela.
-O sistema inicial possui os seguintes arquivos: FormDestino.jsx, Destino.jsx nas pastas destinos e components, Footer.jsx e Header.jsx na pasta main, e Contato.jsx, Destinos.jsx e Home.jsx na pasta pages.
-Foram feitas alterações nos arquivos existentes para incluir novas funcionalidades, como o cálculo de custos e estadia dos locais selecionados.
-O hook useEffect foi utilizado para executar ações com base em determinadas mudanças de estado, como ao selecionar ou desmarcar um valor.
-O hook useState foi utilizado para armazenar valores e atualizar informações conforme necessário.

