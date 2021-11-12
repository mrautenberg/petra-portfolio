import ProcessAccordion from "../components/ProcessAccordion"
import Recomendation from "../components/Recomendation"

// Icons in grid
import {
  FaBomb,
  FaClock,
  FaCommentMedical,
  FaCrosshairs,
  FaExclamation,
  FaToolbox,
  FaTools,
  FaUsers,
} from "react-icons/fa"

// Icons in process acc
import {
  FaCubes,
  FaHeart,
  FaRegComments,
  FaRegEdit,
  FaRegLightbulb,
} from "react-icons/fa"

const descriptions = [
  {
    icon: <FaExclamation />,
    header: "Problem",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    id: 1,
    icon: <FaCrosshairs />,
    header: "Mål",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    id: 2,
    icon: <FaBomb />,
    header: "Utmaningar",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    id: 3,
    icon: <FaTools />,
    header: "Verktyg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    id: 4,
    icon: <FaUsers />,
    header: "Team",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    id: 5,
    icon: <FaToolbox />,
    header: "Min roll",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    id: 6,
    icon: <FaCommentMedical />,
    header: "Mitt bidrag",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
  {
    id: 7,
    icon: <FaClock />,
    header: "Tid",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima, sapiente.",
  },
]

export default function ProjectPage() {
  return (
    <>
      <section>
        <h1>Projekt namn 1</h1>
        <div className="project-grid">
          {descriptions.map((desc) => (
            <article key={desc.id + 1} className="grid-description">
              <header className="project-header">
                <>
                  <i>{desc.icon}</i>
                  <h3>{desc.header}</h3>
                </>
              </header>
              <p>{desc.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <h2>Process</h2>
        <div className="process-container">
          <ProcessAccordion
            icon={
              <i>
                <FaHeart />
              </i>
            }
            title="Empatisera"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
          >
            <span className="accordion-text">abc</span>
          </ProcessAccordion>
          <ProcessAccordion
            icon={
              <i>
                <FaRegEdit />
              </i>
            }
            title="Definiera"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
          >
            <span className="accordion-text">abc</span>
          </ProcessAccordion>
          <ProcessAccordion
            icon={
              <i>
                <FaRegLightbulb />
              </i>
            }
            title="Idé"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
          >
            <span className="accordion-text">abc</span>
          </ProcessAccordion>
          <ProcessAccordion
            icon={
              <i>
                <FaCubes />
              </i>
            }
            title="Prototyp"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
          >
            <span className="accordion-text">abc</span>
          </ProcessAccordion>
          <ProcessAccordion
            icon={
              <i>
                <FaRegComments />
              </i>
            }
            title="Testa"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed placerat, eros id consequat dignissim, dolor dui convallis tortor, et fringilla tortor diam nec quam. Nulla id risus nisi. Fusce non leo at magna feugiat eleifend. Aenean dapibus lorem nisl. Maecenas. "
          >
            <span className="accordion-text">abc</span>
          </ProcessAccordion>
        </div>
      </section>
      <Recomendation />
    </>
  )
}
