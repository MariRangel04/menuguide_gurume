const alergenicosDisponiveis = [

  "Glúten",
  "Lactose",
  "Crustáceos",
  "Soja",
  "Peixe"

]

export default function AllergenFilter({

  selecionados,
  setSelecionados

}) {

  function toggle(alergeno) {

    if (
      selecionados.includes(
        alergeno
      )
    ) {

      setSelecionados(

        selecionados.filter(
          item =>
            item !== alergeno
        )

      )

    } else {

      setSelecionados([
        ...selecionados,
        alergeno
      ])

    }

  }

  return (

    <div style={styles.container}>

      <h2>
        ⚠️ Filtro de Alergênicos
      </h2>

      {

        alergenicosDisponiveis.map(

          alergeno => (

            <label
              key={alergeno}
              style={styles.label}
            >

              <input
                type="checkbox"
                checked={
                  selecionados.includes(
                    alergeno
                  )
                }
                onChange={() =>
                  toggle(alergeno)
                }
              />

              {alergeno}

            </label>

          )

        )

      }

    </div>

  )

}

const styles = {

  container: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "30px"
  },

  label: {
    display: "block",
    marginBottom: "10px"
  }

}