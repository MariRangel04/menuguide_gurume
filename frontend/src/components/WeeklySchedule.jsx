import { useState } from "react"
import finalizacoesData from "../data/finalizacoesData"

export default function WeeklySchedule() {

  const [aberto, setAberto] =
    useState(null)

  return (

    <div style={styles.container}>

      <h2 style={styles.title}>
        🔥 Programação Completa da Semana
      </h2>

      {

        Object.entries(finalizacoesData).map(

          ([prato, agenda]) => (

            <div
              key={prato}
              style={styles.card}
            >

              <button
                style={styles.button}
                onClick={() =>

                  setAberto(

                    aberto === prato
                      ? null
                      : prato

                  )

                }
              >

                {aberto === prato
                  ? "▲"
                  : "▼"}

                {" "}

                {prato}

              </button>

              {

                aberto === prato && (

                  <div style={styles.content}>

                    {

                      Object.entries(agenda).map(

                        ([dia, finalizacao]) => (

                          <div
                            key={dia}
                            style={styles.row}
                          >

                            <strong>
                              {dia}
                            </strong>

                            <p>
                              {finalizacao}
                            </p>

                          </div>

                        )

                      )

                    }

                  </div>

                )

              }

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

  title: {
    marginBottom: "20px"
  },

  card: {
    background: "#fff",
    borderRadius: "12px",
    marginBottom: "12px",
    overflow: "hidden",
    boxShadow:
      "0 2px 8px rgba(0,0,0,.08)"
  },

  button: {
    width: "100%",
    padding: "16px",
    border: "none",
    cursor: "pointer",
    textAlign: "left",
    fontWeight: "bold",
    background: "#fff",
    fontSize: "16px"
  },

  content: {
    padding: "15px",
    borderTop:
      "1px solid #eee"
  },

  row: {
    marginBottom: "10px"
  }

}