import { Project } from "../../../lib/types";
import ProjectCard from "../ProjectCard";
import { Container, Title } from "./styles";
import { projectData as projects } from "../../../data";

const ProjectList = () => {
  return (
    <Container id="projects">
      <Title>Projects I've Built</Title>
      {projects.map((project: Project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </Container>
  );
};

export default ProjectList;
