import Project from "../Project/Project";
import movies from '../../Assets/Images/movies.png';
import sendit from '../../Assets/Images/sendit.png';
import todo from '../../Assets/Images/todo.png';
import './Projects.css';


const Projects = () => {
    const projectDescriptions = [
        `Website for the  biggest courier service provider in Kenya. Using this website, you can track your
        parcels that are still in the delivery process. You can also view your past transactions`,
        `A simple project to practise on global state management using Redux. A user can add a movie,edit 
        it or delete it.`,
        `A to-do web app that a user can leverage in saving to-dos, editing and deleting them`
    ];
    
    return ( 
        <section id="projects">
            <h2>Projects</h2>
              <p>During the course of my burgeoning career, I have been lucky to bring the following
                  projects into existence.
              </p>

              <div className="projects_list">
                  <Project name = 'Movies website' description={projectDescriptions[1]} background={movies}></Project>
                  <Project name = 'sendIT website' description={projectDescriptions[0]}  background={sendit}></Project>
                  <Project name = 'To-do list website' description={projectDescriptions[2]}  background={todo}></Project>
              </div>
            </section>
     );
}
 
export default Projects;