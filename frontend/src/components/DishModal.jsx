export default function DishModal({
  dish,
  close,
}) {
  return (
    <div style={styles.modal}>

  <h2>{dish.nome}</h2>

  <p>{dish.descricao}</p>

  <h3 style={styles.section}>
    🧾 Ingredientes
  </h3>

  <ul>
    {dish.ingredientes?.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>

  <h3 style={styles.section}>
    ⚠️ Alergênicos
  </h3>

  <div style={styles.tags}>

    {dish.alergenicos?.map(item => (

      <span
        key={item}
        style={styles.tag}
      >
        {item}
      </span>

    ))}

  </div>

  <h3 style={styles.section}>
    🥣 Molhos
  </h3>

  <ul>
    {dish.molhos?.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>

  <h3 style={styles.section}>
    ✨ Finalização Atual
  </h3>

  <ul>
    {dish.finalizacao?.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>

  <button
    onClick={close}
    style={styles.button}
  >
    Fechar
  </button>

</div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    background: "white",
    padding: 30,
    borderRadius: 12,
    width: 500,
  },
  section: {
  marginTop: "20px"
},

tags: {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap"
},

tag: {
  background: "#ffdddd",
  color: "#b00020",
  padding: "8px 12px",
  borderRadius: "20px",
  fontWeight: "bold"
},

button: {
  marginTop: "20px",
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  width: "100%"
}
};