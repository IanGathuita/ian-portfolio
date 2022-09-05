import './Project.css';
import { ModalContext } from '../Projects/Projects';
import { useContext} from 'react';

const Project = (props) => {
    const bgImageUrl = `url(${props.background})`;
    const { hideModal} = useContext(ModalContext);
    const handleClick = () => {
        try {
            let projectUrl = new URL(props.url);
            window.location.assign(projectUrl);
            return;
        }
        catch {
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