
import IanImg from '../../Assets/Images/Ian_img.jpg';
import './About.css';
const About = () => {
    
    return ( 
        <section className="about" id="about" >
        <div>
        <h2>Who am I?</h2>
        <p>I am a junior software developer who loves making websites and apps. During my development
            process, I work closely with my clients in order to deliver what they want. I ensure that the
            final product is optimized and usable in order to give users the best experience.
        </p>
        </div>
        <img  src={IanImg} alt="Ian's passport"></img>
        </section>
     );
}
 
export default About;
