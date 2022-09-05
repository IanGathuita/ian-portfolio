import css from './Skills.module.css';
import code from '../../Assets/Images/code.svg';
import {FaCheckCircle,FaCheck} from 'react-icons/fa';
const Skills = () => {
    const imageUrl = `url(${code})`
    const style = {backgroundImage:imageUrl,backgroundRepeat:'no-repeat',backgroundSize:' auto 30%',backgroundPosition:'bottom right',backgroundBlendMode:'darken'};
    return ( 
        <section className="skills" id='skills' style={style}>
            <h2>My stack</h2>
            <p>To build amazing products for my clients, I use the following languages and libraries:</p>
            <ul id={css.skills_list}>
                <div className={css.first_column}>
                <li> <FaCheckCircle></FaCheckCircle><span>Javascript</span>
                    <ul>
                        <li> <FaCheck></FaCheck> <span>React</span></li>
                        <li><FaCheck></FaCheck><span>Node.js</span></li>
                        <li><FaCheck></FaCheck><span>Express</span></li>
                    </ul>
                </li>
                </div>
                <div className="second-column">
                <li><FaCheckCircle></FaCheckCircle><span>Java</span></li>
                <li><FaCheckCircle></FaCheckCircle><span>MySQL and T-SQL</span></li>
                <li><FaCheckCircle></FaCheckCircle><span>Wordpress</span></li>
                <li><FaCheckCircle></FaCheckCircle><span>MongoDB</span></li>
                </div>
            </ul>
        </section>
     );
}
 
export default Skills;