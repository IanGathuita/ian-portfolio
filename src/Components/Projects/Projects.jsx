import Project from "../Project/Project";
import movies from '../../Assets/Images/movies.png';
import sendit from '../../Assets/Images/sendit.png';
import todo from '../../Assets/Images/todo.png';
import './Projects.css';
import { Modal } from '../Modal/Modal';
import { useState, createContext, useEffect} from 'react';

const ModalContext = createContext();
const Projects = () => {
    const projectsInfo = [
        {
            name: 'sendIT website', description: `Website for a courier service provider. Using this website, you can track your
        parcels that are still in the delivery process. You can also view your past transactions`,
            background: sendit, url:''
        },
        {
            name: 'Movies website', description: `A simple project to practise on global state management using Redux. A user can add a movie,edit 
        it or delete it.`, background: movies,url:''
        },
        {
            name: 'To-do list website', description: `A to-do web app that a user can leverage  to save to-dos, edit and delete them`,
            background:  todo, url:''
        }
    ];
    const [modalHidden, setModalHidden] = useState(true);

    useEffect(() => {
        const appElement = document.querySelector('.App');
        if(modalHidden){                 
           appElement.classList.remove('overlay');
           appElement.style.filter = 'none';
        }
        else{
            appElement.classList.add('overlay');
            appElement.style.filter = 'blur(8px)';
        }
    },[modalHidden]);

    let hideModal = (flag) => {
        setModalHidden(flag);
    }
    return (
        <section id="projects">
            <h2>Projects</h2>
            <p>During the course of my burgeoning career, I have been lucky to bring the following
                projects into existence.
            </p>
            <ModalContext.Provider value={{modalHidden, hideModal}}>
                <div className="projects_list">
                    {
                        projectsInfo.map(project => {
                            return <Project key={project.name} name={project.name} description={project.description} background={project.background} url={project.url} />
                        })
                    }
                </div>
                {modalHidden || <Modal />}
            </ModalContext.Provider>
        </section >
    );
}

export { Projects, ModalContext };

