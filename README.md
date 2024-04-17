
RARTING SONGS - Projeto Full Stack

O Rating Songs é um projeto Full Stack que permite criar, visualizar, deletar ,votar e classificar músicas em tempo real. Ele consiste em um backend desenvolvido em Node.js com banco de dados MySQL para armazenar as informações das músicas e um frontend desenvolvido em React com Vite para a interface do usuário.

FUNCIONALIDADES
CRUD de Cards de Música: É possível criar, visualizar, atualizar e deletar cards de música, contendo informações como nome do artista, título da música e foto.
Votação em Tempo Real: Os usuários podem votar em suas músicas favoritas e as informações de votos são atualizadas em tempo real.
Ranking Automático: As três músicas mais votadas são automaticamente classificadas e exibidas na coluna da direita como o Top 3.
Backend

O backend foi desenvolvido em Node.js e utiliza o framework Express para criar as rotas da API.
O banco de dados utilizado é o MySQL para armazenar as informações dos cards de música. Foram criadas rotas para realizar operações CRUD nos cards de música, bem como para votar em uma música e obter as três músicas mais votadas para o ranking.

Instalação do Backend
Clone o repositório do backend:
git clone https://github.com/seu-usuario/music-cards-backend.git

Instale as dependências do projeto:
cd rating_songs
cd backend
npm install
Configure as variáveis de ambiente necessárias, como a URL do banco de dados MySQL, no arquivo .env.

Inicie o servidor:
na pasta de backend:
cd src
node app.js


Frontend
O frontend foi desenvolvido em React com Vite para um carregamento rápido durante o desenvolvimento. 
Utilizou-se o Axios para fazer requisições à API do backend e o Tailwind CSS para estilização da interface.

Instalação do Frontend
Clone o repositório do frontend:
git clone https://github.com/seu-usuario/music-cards-frontend.git
Instale as dependências do projeto:

cd rating_songs
cd frontend
npm install
Configure as variáveis de ambiente, como a URL da API do backend, no arquivo .env.

Inicie o servidor de desenvolvimento:
npm start

Uso
Acesse o frontend em seu navegador e comece a criar, visualizar e votar em músicas em tempo real!
