import { FaGithub } from "react-icons/fa6";

const myProjects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      repositoryLink: 'Link to the GitHub repository',
    },
    {
      title: 'Project 2',
      description: 'Description of project 2',
      repositoryLink: 'Link to the GitHub repository',
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      repositoryLink: 'Link to the GitHub repository',
    },
    {
      title: 'Project 4',
      description: 'Description of project 4',
      repositoryLink: 'Link to the GitHub repository',
    },
    {
      title: 'Project 5',
      description: 'Description of project 5',
      repositoryLink: 'Link to the GitHub repository',
    },
  ];
  const Projects = () => {
    return (
      <main className="projects-container">
        {myProjects.map((project) => (
          <section key={project.title} className="project-item border border-2 rounded-lg">
            <section className="project-image-container">
              <FaGithub />
            </section>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-lg">{project.description}</p>
            <p>Check out the link to the project repository <a href={project.repositoryLink} target="link">Here</a> </p>
  
          </section>
        ))}
      </main>
    )
  }
  
  export default Projects