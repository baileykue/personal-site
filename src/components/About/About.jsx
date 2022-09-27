import styles from './About.css';
import profile_pic from '../../assets/profile-pic.png';
import { tech_stack } from '../../data/tech-stack';

export default function About() {
  const { about, tech, bio, skill_card, pic } = styles;
  return (
    <div className={about}>
      <div id="about-id" className={bio}>
        <p>
          My creative, curious, and collaborative qualities allow me to focus my
          attention on writing clean, consistent code. I am an empathetic
          developer who values clear communication, truly thriving among teams
          where ideas and excitement are shared.
          <br />
          My creative, curious, and collaborative qualities allow me to focus my
          attention on writing clean, consistent code. I am an empathetic
          developer who values clear communication, truly thriving among teams
          where ideas and excitement are shared.
        </p>
        <h1>Tech Stack</h1>
        <div className={tech}>
          {tech_stack.map((skill) => (
            <div key={skill.id} className={skill_card}>
              <h2>{skill.title}</h2>
              <ul>
                <li>{skill.li1}</li>
                <li>{skill.li2}</li>
                {skill.li3 && <li>{skill.li3}</li>}
                {skill.li4 && <li>{skill.li4}</li>}
                {skill.li5 && <li>{skill.li5}</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className={pic}>
        <img src={profile_pic} />
      </div>
    </div>
  );
}
