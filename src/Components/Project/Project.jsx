import './Project.css';
const Project = (props) => {
    const bgImageUrl = `url(${props.background})`;
    return ( 
        <div className="project-card" style={{backgroundImage: bgImageUrl}}>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <button>See project</button>
        </div>
     );
}
 
export default Project;