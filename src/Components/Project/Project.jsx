import './Project.css';
import { ModalContext } from '../Projects/Projects';
import { useContext, useState } from 'react';

const Project = (props) => {
    const bgImageUrl = `url(${props.background})`;
    const { hideModal, scrollPosition,setScrollPos } = useContext(ModalContext);
    const handleClick = () => {
        try {
            let projectUrl = new URL(props.url);
            window.location.assign(projectUrl);
            return;
        }
        catch {
            setScrollPos(window.scrollY);
            hideModal(false);
        }
    }

    return (
        <div className="project-card" style={{ backgroundImage: bgImageUrl }}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button onClick={handleClick} >See project</button>
        </div>
    );
}

export default Project;