// **** Se a data do evento for posterior à data atual, permitir o evento; senão, alertar que o cadastro não será permitido por data inválida.
// **** Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.
// **** Listar participantes e palestrantes por evento.
// **** Enquanto a quantidade de participantes for inferior a 100, permitir cadastro; senão, alertar que o cadastro não será permitido por ter excedido o limite.
// ****Criar fluxograma com todos os requisitos que devem ser atendidos pelo sistema.

//data atual
let data = new Date()
let dia = data.getDate()
let mes = data.getMonth() + 1 //o getmonth vai 0 à 11, então para não ficar confuso adicionei o +1 :)
let ano = data.getFullYear()

let idade = 18
if (idade < 18) {
  console.log('Você precisa ter mais de 18 anos para criar um evento')
} else {
  //data do evento
  let eventoDia = 30
  let eventoMes = 08
  let eventoAno = 2022
  // processamento/saída
  if (eventoAno >= ano) {
    if (eventoMes >= mes) {
      if (eventoDia >= dia) {
        console.log(`Evento pode ser realizado!`)
        let convidados = [
          'Pedro',
          'Maria',
          'José',
          'Luis',
          'Sandra',
          'Adriana',
          'Manoel',
          'Geraldo',
          'Márcia',
          'Jorge',
          'Marcelo'
        ]
        let palestrantes = ['Carlos', 'Francisca', 'Manoel']
        let participantes = convidados.length + palestrantes.length
        if (participantes == 100) {
          console.log(
            'Você alcançou o limite de 100 participantes, você não pode adicionar mais participantes!'
          )
        } else if (participantes > 100) {
          console.log(
            `limite de 100 pessoas excedido, por favor remover ${
              participantes - 100
            } participantes do evento!`
          )
        } else {
          console.log(`Restam ${100 - participantes} vagas para participantes.`)
        }
      } else {
        console.log(`dia inválido!`)
      }
    } else {
      console.log(`mês inválido`)
    }
  } else {
    console.log(`ano inválido`)
  }
}
