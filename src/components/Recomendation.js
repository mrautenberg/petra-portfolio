import buddy from "./buddy.jpeg"

export default function Recomendation() {
  return (
    <section>
      <div className="divider"></div>
      <h2 style={{ marginTop: "2rem" }}>Recommendations</h2>
      <div className="recommendation-container">
        <img className="recommendation-img" src={buddy} alt="my friend" />
        <div className="recommendation-text-box">
          <p className="recommendation-text">Wow, hon är bäst!</p>
        </div>
      </div>
      <div className="divider"></div>
    </section>
  )
}
