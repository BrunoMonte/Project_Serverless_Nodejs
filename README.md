<img src="https://img.icons8.com/color/50/000000/amazon-web-services.png"/>

# CONFIGURAÇÃO DE PROJETO COM SERVERLESS

$ Comando para iniciar com npm 'npm install serverless -g' $

$ Para criação template serverless 'serverless  create --template "nomeDoSeuTemplate" --path "nomePasta" '
  - Arquivos criados:

    - .gitgnore
    - .handler
    - serverless.yml
$

# CONFIGURANDO O TYPESCRIPT NO PROJETO

 - npm install -D serverless-plugin-typescript typescript

 - Após ir no arquivo serverless.yml
 --  plugins:
  - serverless-plugin-typescript

 - Depois crie arquivo no projeto tsconfig.json , e coloque o seguinte json no arquivo

 -- {
  "compilerOptions": {
    "preserveConstEnums": true,
    "strictNullChecks": true,
    "sourceMap": true,
    "allowJs": true,
    "target": "es5",
    "outDir": ".build",
    "moduleResolution": "node",
    "lib": ["es2015"],
    "rootDir": "./"
  }
}

# INSTALAÇÃO DE PLUGINS 

- npm install --save @types/aws-lambda

<<<<<<< HEAD
-- Por ser uma integração da APIGateway com uma Lambda function, é instalada esse plugin.
=======
-- Por ser uma integração da APIGateway com uma Lambda function, é instalada esse plugin.
>>>>>>> 93fe094d63ec0c25e9fea88b7a8cf259a059dc82
