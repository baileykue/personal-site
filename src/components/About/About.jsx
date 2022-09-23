import styles from './About.css';
import profile_pic from '../../assets/profile-pic.png';

export default function About() {
  const { about, tech, bio } = styles;
  return (
    <div className={about}>
      <div id="about-id" className={bio}>
        <p>
          My creative, curious, and collaborative qualities allow me to focus my
          attention on writing clean, consistent code. I am an empathetic
          developer who values clear communication, truly thriving among teams
          where ideas and excitement are shared.
        </p>
        <img src={profile_pic} />
      </div>
      <div className={tech}>
        <h3>Tech Stack</h3>
      </div>
    </div>
  );
}
