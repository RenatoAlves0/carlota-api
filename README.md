# Dev-Web
# TECNOLOGIAS

- NodeJS
- Postman

# PROCEDIMENTOS DE INICIALIZAÇÃO DO PROJETO

- git clone https://github.com/RuanSantos0/Dev-Web.git
- npm install
- npm start
# ENTIDADES

- idosos
- cuidadors
- familiars
- plano_diarios
- logins
- pontuacaos

# REQUISIÇõES 

- GET = http://localhost:3000/ENTIDADE
- POST = http://localhost:3000/ENTIDADE
- PUT = http://localhost:3000/ENTIDADE/id, id = (5d51fe37af34d20fe04065ab)
- DELETE = http://localhost:3000/ENTIDADE/id


# EXEMPLO 

 - GET = http://localhost:3000/logins
 - POST = http://localhost:3000/logins
    obj = {
	    "usuario": "gleibia",
	    "senha": "ruanito123"
          }
- PUT = http://localhost:3000/logins/id, id = (5d51fe37af34d20fe04065ab)
- Exemplo = http://localhost:3000/logins/5d51fe37af34d20fe04065ab
    obj = {
	    "usuario": "exemplo-alteração",
	    "senha": "exemplo-alteração"
          }
- DELETE = http://localhost:3000/logins/id
- Exemplo = http://localhost:3000/logins/5d51fe37af34d20fe04065ab

# TESTE

- GET = pode ser feto pelo proprio navedador.
- POST = é preciso instalar o postman, pois é preciso mandar um objeto.

