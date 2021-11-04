import ProcessAccordion from "../components/ProcessAccordion";
import ProjectGrid from "../components/ProjectGrid";
import Recomendation from "../components/Recomendation";

export default function ProjectPage() {
  return (
    <>
      <ProjectGrid />
      <br />
      {/* map out ProcessAccordion */}
      <div className="process-container">
        <ProcessAccordion 
          title="Empatisera"
          subtitle="blablabalbalbalab" 
        >
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion 
          title="Definiera"
          subtitle="blablabalbalbalab" 
        >
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion title="Idé">
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion title="Prototyp">
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
        <ProcessAccordion title="Testa">
          <span className="accordion-text">abc</span>
        </ProcessAccordion>
      </div>
      <br />
      <Recomendation />
    </>
  )
}