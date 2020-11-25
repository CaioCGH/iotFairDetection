Nome: Caio Calisto Gaede Hirakawa  NUSP:7590899

# Proposta de projeto para a Diciplina  MAC0546/6929 - Fundamentos da Internet das Coisas (2020)

## Introdução resumida

Em São Paulo, feiras-livres, ou feiras-de rua são tradicionais pontos de venda de alimentos frescos. Uma consequência negativa porém, é a interdição do fluxo de carros na rua onde é realizada. Embora a regulamentação estabeleça horários fixos, feirantes podem cometer desvios, o que pode afetar o planejamento de usuários e moradores dessas ruas.


A ideia desse projeto seria monitorar a atividade da feira a fim de informar, em tempo real, via internet, o estágio em que ela se encontra, para que as pessoas possam tomar melhores decisões se precisarem usar a rua (ou se quiserem usar a feira).

## Hardware

- Qual hardware para troca de informações você irá desenvolver ou aprimorar utilizando conceitos de IoT?

A ideia seria utilizar um Raspberry Pi 3 B, com uma câmera (Módulo de Câmera Para Raspberry Pi 5MP) para captar alguma imagem de onde a feira é realizada.

- Descreva o que é entrada (sensores/dados) e o que é saída (dados/informações).

Entrada: As imagens captadas pela câmera, que estará apontanda para alguma parte da feira.

Saída: Inicialmente pensei numa API que responderia se a feira está ocorrendo ou não, potencialmente até dando mais detalhes como estágio da feira, energia, tempo decorrido, etc.

Outra opção seria um sistema de aviso ativo, por inscrição, podendo mandar email/telegram etc. indicando que a feira começou/acabou.

- Descreva o filtro que será aplicado nos dados, pois o dado de entrada não deve ser igual à informação da saída.

Utilizando softwares como TensorFlow e OpenCV, analisaremos as imagens captadas pela camera a fim de determinar se a feira está acontecendo ou não, possivelmente integrando mais detalhes relevantes que forem possíveis utilizando tais softwares.

- Descreva como o hardware irá se comunicar. Se será por meio de alguma API ou outra tecnologia.

A ideia é uma API, provavelmente bem simples, talvez com uma única requisição GET que devolve o estado atual da feira.



