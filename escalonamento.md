<h2 align="center">ATIVIDADE S.O - ESCALONAMENTO DE PROCESSOS</h2>

<br>

1) **Defina escalonamento de processos:**
	
	- é o processo em que um algoritmo tem que selecionar, de modo rigoroso, qual processo irá 				 
      usar a CPU naquele momento.

2) **Quais são os objetivos do escalonamento?**

	- usar de forma eficiente a CPU. Mas, alguns objetivos dependem do ambiente:

	- Todos os sistemas:
	 
	   - Justiça: dar a cada processo uma porção justa da CPU
	   - Aplicação da política: verificar se a política estabelecida é cumprida
	   - Equilíbrio: manter ocupada todas as partes do sistema

	- Sistemas em lotes:

	   - Vazão (throughput): maximizar o número de tarefas por hora 
	   - Tempo de retorno: minimizar o tempo entre a submissão e o término
	   - Utilização da CPU: manter a CPU ocupada o tempo todo

	- Sistemas interativos:

	   - Tempo de resposta: responder rapidamente às requisições
	   - Proporcionalidade: satisfazer às expectativas do usuário

	- Sistemas de tempo real:

	   - Cumprimento dos prazos: evitar a perda de dados
	   - Previsibilidade: evitar a degradação da qualidade em sistemas multimídia

3) **O que são algoritmos preemptivos e não preemptivos?**

	- *Preemptivos*: escolhe um processo e lhe concede a CPU durante determinado tempo;

	- *Não preemptivos*: ocorre apenas em situações que praticamente obrigam que uma decisão 
       seja tomada;

4) **Fale sobre os seguintes algoritmos de escalonamento:**

	a) FIFO (First-in-First-Out):

	- a CPU é atribuida aos processos na ordem em que são requisitados.

	b) RR (Round-Robin):
		
	- cada processo recebe um intervalo de tempo (quantum) e se o processo ainda está 			 
    rodando quando seu quantum terminar (ou se o processo bloqueie ou termine antes de 	 
    acabar), a UCP é tomada deste processo e o escalonador seleciona um novo para rodar.
    O escalonador mantém uma lista de processos executáveis (que estão prontos) e quando 
    o quantum termina sem o processo terminar, o mesmo é colocado no fim dessa lista.

	c) SPF (Shortest Process First):

	- é útil para sistemas de lotes (batch), pois muitas vezes o usuário já sabe estimar o 
    tempo de execução dos programas (pois os programas são rodados constantemente). O 
    escalonador escolhe para execução entre todos os jobs disponíveis, aquele de menor tempo 
    de execução.

	d) SRT (Shortest Remaining Time):

	- o escalonador sempre escolhe o processo em que o tempo de execução restante é menor.

	e) Prioridades:

	- a prioridade serve para oferecer um tratamento distinto à processos diversos. No instante 	 
    da criação de um processo ele recebe uma prioridade. E o quando o escalonador tiver que 
    escolher qual processo será executado, escolherá o de mais alta prioridade.

		- forma estática: quando a prioridade é associada no momento da criação do processo. Ex: 
        quando se tem uma hierarquia.

		- forma dinâmica: o escalonador decide o valor da prioridade de acordo com estatísticas 
        sobre a execução deste processo em quanta anteriores. 
