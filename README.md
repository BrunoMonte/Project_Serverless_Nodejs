# CONFIGURAÇÃO DE PROJETO COM SERVERLESS
$ Comando para iniciar com npm 'npm install serverless -g' $

$ Para criação template serverless 'serverless  create --template "nomeDoSeuTemplate" --path "nomePasta" '
  - Arquivos criados:
<<<<<<< HEAD
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

-- Por ser uma integração da APIGateway com uma Lambda function, é instalada esse plugin.
=======
  
  -.gitgnore
   -.handler
   -serverless.yml
$
>>>>>>> 794f79a848e620972cc6b762cc916ce7fcb27434
