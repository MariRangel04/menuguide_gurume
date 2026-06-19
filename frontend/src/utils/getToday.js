export default function getToday() {

  const dias = [
    "domingo",
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado"
  ]

  return dias[new Date().getDay()]

}