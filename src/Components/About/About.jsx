
import IanImg from '../../Assets/Images/Ian_img.jpg';
import './About.css';
const About = () => {
    
    return ( 
        <section className="about" id="about" >
        <div>
        <h2>Who am I?</h2>
        <p>I am a junior software developer who thrives on untangling complex problems with elegant code. 
            Websites and apps are my tools to <em>bridge the gap between user needs and innovative solutions</em>.
            I find immense satisfaction in crafting user-centric experiences that have a positive impact.
        </p>
        </div>
        <img  src={IanImg} alt="Ian's passport" className='passport'></img>
        </section>
     );
}
 
export default About;
