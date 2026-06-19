import { useEffect, useState } from "react"
import axios from "axios"

export default function DailyFinishes() {

  const [finishes, setFinishes] = useState([])

  useEffect(() => {

    async function load() {

      const res =
        await axios.get(
          "http://localhost:3000/finishes/today"
        )

      setFinishes(res.data)

    }

    load()

  }, [])

  return (

    <div style={styles.container}>

      <h2>⭐ Finalizações do Dia</h2>

      {finishes.map((item, index) => (

        <div key={index} style={styles.card}>

          <strong>{item.prato}</strong>

          <p>{item.finalizacao}</p>

        </div>

      ))}

    </div>

  )

}

const styles = {

  container: {
    marginBottom: "30px"
  },

  card: {
    background: "#fff",
    padding: "15px",
    borderRadius: "12px",
    marginBottom: "10px"
  }

}