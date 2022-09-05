import './UnavailableProject.css';
import {ModalContext} from '../Projects/Projects';
import { useContext } from 'react';


export const UnavailableProject = () => {
    const {modalHidden,hideModal} = useContext(ModalContext);
    const handleClick = () => {
        hideModal(true);
    } 
    return(
        <section className='unavailable' hidden={modalHidden}>
        <div>
            <h2>OOps</h2>
            <p>This project is not available for viewing by the public yet. Check sometime later</p>
            <button className='modalButton' onClick={handleClick}>Close</button>
        </div>
        </section>
    );
}