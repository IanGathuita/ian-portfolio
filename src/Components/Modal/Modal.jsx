import ReactDom from 'react-dom';
import { UnavailableProject } from '../UnavailableProject/UnavailableProject';

export const Modal = () => {
    return ReactDom.createPortal(<UnavailableProject/>,document.getElementById('modal'));
}