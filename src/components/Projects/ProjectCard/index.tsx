import { Project } from "../../../lib/types";
import { Card, Image, Content, Tech, Name, Description } from "./styles";

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props): JSX.Element => {
  return (
    <Card href={project.href} target="__blank">
      <Image src={project.image} />
      <Content>
        <Name>{project.name}</Name>
        <div>
          {project.technologies.map((tech) => (
            <Tech>{tech}</Tech>
          ))}
        </div>
        <Description>{project.description}</Description>
      </Content>
    </Card>
  );
};

export default ProjectCard;
