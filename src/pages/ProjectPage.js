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
        <ProcessAccordion />
        <ProcessAccordion />
        <ProcessAccordion />
        <ProcessAccordion />
        <ProcessAccordion />
      </div>
      <br />
      <Recomendation />
    </>
  )
}