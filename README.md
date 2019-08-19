# TECNOLOGIAS

- NodeJS
- Postman

# ENTIDADES

- idosos
- cuidadors
- familiars
- plano_diarios
- logins
- pontuacaos

# REQUISIÇÕES 

- GET = https://carlota-api.herokuapp.com/ENTIDADE
- POST = https://carlota-api.herokuapp.com/ENTIDADE
- PUT = https://carlota-api.herokuapp.com/ENTIDADE/id, id == 5d51fe37af34d20fe04065ab
- DELETE = https://carlota-api.herokuapp.com/ENTIDADE/id


# EXEMPLO 

 - GET = https://carlota-api.herokuapp.com/logins
 - POST = https://carlota-api.herokuapp.com/logins
    obj = {
	    "usuario": "gleibia",
	    "senha": "ruanito123"
          }
- PUT = https://carlota-api.herokuapp.com/logins/id, id == 5d51fe37af34d20fe04065ab
- Exemplo = https://carlota-api.herokuapp.com/logins/5d51fe37af34d20fe04065ab
    obj = {
	    "usuario": "exemplo-alteração",
	    "senha": "exemplo-alteração"
          }
- DELETE = https://carlota-api.herokuapp.com/logins/id
- Exemplo = https://carlota-api.herokuapp.com/logins/5d51fe37af34d20fe04065ab

# TESTE

- GET e GET por id = pode ser feto pelo próprio navedador.
- POST, PUT, DELETE = é preciso instalar o postman, pois é preciso mandar um objeto.

