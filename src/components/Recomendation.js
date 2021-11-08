import buddy from "./buddy.jpeg"

export default function Recomendation() {
  return (
    <div>
      <h2>Recomendations</h2>
      <div>
        <img
          className="recomendation-img"
          src={buddy}
          alt="my friend" />
        <p>Wow, hon är bäst!</p>
      </div>
    </div>
  )
}
