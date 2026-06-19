import { useState } from "react"
import finalizacoesData from "../data/finalizacoesData"

export default function DailySimulator() {

  const dias = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo"
  ]

  const hojeIndex = (() => {

    const diaAtual =
      new Date().getDay()

    const mapa = {
      1: 0,
      2: 1,
      3: 2,
      4: 3,
      5: 4,
      6: 5,
      0: 6
    }

    return mapa[diaAtual]

  })()

  const [diaSelecionado,
    setDiaSelecionado] =
    useState(
      dias[hojeIndex]
    )

  function escolherHoje() {

    setDiaSelecionado(
      dias[hojeIndex]
    )

  }

  function escolherAmanha() {

    const prox =
      (hojeIndex + 1) %
      dias.length

    setDiaSelecionado(
      dias[prox]
    )

  }

  return (

    <div style={styles.container}>

      <h2>
        📅 Simulador de Finalizações
      </h2>

      <div style={styles.controls}>

        <button
          onClick={escolherHoje}
          style={styles.button}
        >
          Hoje
        </button>

        <button
          onClick={escolherAmanha}
          style={styles.button}
        >
          Amanhã
        </button>

        <select
          value={diaSelecionado}
          onChange={(e) =>
            setDiaSelecionado(
              e.target.value
            )
          }
          style={styles.select}
        >

          {

            dias.map(dia => (

              <option
                key={dia}
                value={dia}
              >

                {dia}

              </option>

            ))

          }

        </select>

      </div>

      {

        Object.entries(
          finalizacoesData
        ).map(

          ([prato, agenda]) => (

            <div
              key={prato}
              style={styles.card}
            >

              <strong>
                {prato}
              </strong>

              <p>
                {
                  agenda[
                    diaSelecionado
                  ]
                }
              </p>

            </div>

          )

        )

      }

    </div>

  )

}

const styles = {

  container: {
    marginTop: "40px"
  },

  controls: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
    flexWrap: "wrap"
  },

  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    background: "#01a78f",
    color: "#fff"
  },

  select: {
    padding: "10px",
    borderRadius: "10px"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "10px",
    boxShadow:
      "0 2px 8px rgba(0,0,0,.08)"
  }

}