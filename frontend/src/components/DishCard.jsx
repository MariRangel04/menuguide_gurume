export default function DishCard({
  prato,
  onClick
}){ 

  return (

<div style={{
  ...styles.card,
  border: prato.destaque ? "2px solid #01a78f" : "none"
}}>

{
  prato.imagem && (

    <img
      src={prato.imagem}
      alt={prato.nome}
      style={styles.image}
    />

  )
}

      <div style={{ padding: "15px" }}>

  <h3>
    {prato.nome}
  </h3>

  <p style={{
    color: "#666",
    minHeight: "40px"
  }}>
    {prato.descricao}
  </p>

  <strong
    style={{
      color: "#01a78f",
      fontSize: "18px"
    }}
  >
    R$ {prato.preco}
  </strong>

</div>

    </div>

  )

}

const styles = {

  card: {
    width: "280px",
    backgroundColor: "#fff",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
    cursor: "pointer",
    transition: "0.3s",
    paddingBottom: "15px"
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    backgroundColor: "#d9d9d9"
  }

}