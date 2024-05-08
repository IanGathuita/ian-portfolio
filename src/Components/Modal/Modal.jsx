import ReactDom from 'react-dom';
import { UnavailableProject } from '../UnavailableProject/UnavailableProject';
import { useEffect } from 'react';



export const Modal = () => {
    useEffect(() => {
        document.body.style.maxHeight = '100svh';
        document.body.style.height = '100svh';
        document.body.setAttribute('overflow','none');
    });

    return ReactDom.createPortal(<UnavailableProject/>,document.getElementById('modal'));
}