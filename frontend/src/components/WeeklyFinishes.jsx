import { useEffect, useState } from "react"
import axios from "axios"

export default function WeeklyFinishes() {

  const [data, setData] = useState([])

  useEffect(() => {

    axios.get("http://localhost:3000/finishes")
      .then(res => setData(res.data))

  }, [])

  const dias = [
    "segunda",
    "terca",
    "quarta",
    "quinta",
    "sexta",
    "sabado",
    "domingo"
  ]

  return (

    <div style={styles.container}>

      <h2>📅 Finalizações da Semana</h2>

      {data.map(item => (

        <div key={item._id} style={styles.card}>

          <h3>{item.prato}</h3>

          <div style={styles.grid}>

            {dias.map(dia => (

              <div key={dia} style={styles.day}>

                <strong>{dia}</strong>
                <p>{item[dia]}</p>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>

  )

}

const styles = {

  container: {
    marginTop: 30
  },

  card: {
    background: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 10
  },

  day: {
    background: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
    fontSize: 12
  }

}