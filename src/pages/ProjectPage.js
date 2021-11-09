import ProcessAccordion from "../components/ProcessAccordion"
import Recomendation from "../components/Recomendation"

// Icons in grid
import { FaBomb, FaClock, FaCommentMedical, FaCrosshairs, FaExclamation, FaToolbox, FaTools, FaUsers } from "react-icons/fa";

// Icons in process acc
import { FaCubes, FaHeart, FaRegComments, FaRegEdit, FaRegLightbulb } from "react-icons/fa"

const descriptions = [
  {
    icon: <FaExclamation />,
    header: "Problem",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    icon: <FaCrosshairs />,
    header: "Mål",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    icon: <FaBomb />,
    header: "Utmaningar",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    icon: <FaTools />,
    header: "Verktyg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    icon: <FaUsers />,
    header: "Team",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    icon: <FaToolbox />,
    header: "Min roll",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    icon: <FaCommentMedical />,
    header: "Mitt bidrag",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    icon: <FaClock />,
    header: "Tid",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
]

export default function ProjectPage() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Projekt namn 1</h1>
      <section className="project-grid">
        {descriptions.map((desc) => (
          <article className="grid-description">
            <header className="article-header">
              <>
                <i>{desc.icon}</i>
                <h3>{desc.header}</h3>
              </>
            </header>
            <p>{desc.text}</p>
            {console.log(desc.header)}
          </article>
        ))}
      </section>
      <h2 style={{textAlign: "center", marginBottom: "2rem"}}>Process</h2>
      {/* map out ProcessAccordion */}
      <div className="process-container">
        <ProcessAccordion
          icon={<i><FaHeart /></i>}
          title="Empatisera" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
        >
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion
          icon={<i><FaRegEdit /></i>}
          title="Definiera" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
        >
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion
          icon={<i><FaRegLightbulb /></i>}
          title="Idé"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
        >
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion
          icon={<i><FaCubes /></i>}
          title="Prototyp"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
        >
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion
          icon={<i><FaRegComments /></i>}
          title="Testa"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
        >
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
      </div>

      <br />
      <Recomendation />
    </>
  )
}
