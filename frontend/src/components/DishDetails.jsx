export default function DishDetails({ dish, close }) {
  if (!dish) return null

  return (

    <div style={styles.overlay} onClick={close}>

      <div style={styles.modal} onClick={(e) => e.stopPropagation()}>

        {/* IMAGEM */}
        {dish.imagem && (
          <img
            src={dish.imagem}
            alt={dish.nome}
            style={styles.image}
          />
        )}

        {/* CONTEÚDO */}
        <div style={styles.content}>

          <h2 style={styles.title}>
            {dish.nome}
          </h2>

          <p style={styles.desc}>
            {dish.descricao}
          </p>

          <div style={styles.price}>
            R$ {Number(dish.preco).toFixed(2)}
          </div>

          {/* ALERGÊNICOS */}
          {dish.alergenicos?.length > 0 && (
            <div style={styles.section}>
              <h4>Alergênicos</h4>

              <div style={styles.tags}>
                {dish.alergenicos.map((a, i) => (
                  <span key={i} style={styles.tag}>
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* MOLHOS (COMBINADOS / SUSHI) */}
          {dish.molhos?.length > 0 && (
            <div style={styles.section}>
              <h4>Molhos</h4>

              <div style={styles.tags}>
                {dish.molhos.map((m, i) => (
                  <span key={i} style={styles.tagAlt}>
                    {m}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* TÓPICOS / EXTRAS */}
          {dish.extras?.length > 0 && (
            <div style={styles.section}>
              <h4>Finalização</h4>

              <div style={styles.tags}>
                {dish.extras.map((e, i) => (
                  <span key={i} style={styles.tagExtra}>
                    {e}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* BOTÃO FECHAR */}
          <button onClick={close} style={styles.button}>
            Fechar
          </button>

        </div>

      </div>

    </div>
  )
}

const styles = {

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },

  modal: {
    width: "90%",
    maxWidth: 420,
    background: "#fff",
    borderRadius: 16,
    overflow: "hidden"
  },

  image: {
    width: "100%",
    height: 220,
    objectFit: "cover"
  },

  content: {
    padding: 15
  },

  title: {
    marginBottom: 5
  },

  desc: {
    color: "#666",
    marginBottom: 10
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#01a78f",
    marginBottom: 15
  },

  section: {
    marginBottom: 12
  },

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: 6
  },

  tag: {
    background: "#ffe6e6",
    padding: "4px 8px",
    borderRadius: 10,
    fontSize: 12
  },

  tagAlt: {
    background: "#e6f7ff",
    padding: "4px 8px",
    borderRadius: 10,
    fontSize: 12
  },

  tagExtra: {
    background: "#e6ffe6",
    padding: "4px 8px",
    borderRadius: 10,
    fontSize: 12
  },

  button: {
    marginTop: 15,
    width: "100%",
    padding: 12,
    border: "none",
    borderRadius: 10,
    background: "#01a78f",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer"
  }
}