import styles from './Projects.css';

export default function Projects() {
  const { projects } = styles;
  return (
    <div id="projects-id" className={projects}>
      <h1>Projects</h1>
      <div>
        <h2>Resourcery</h2>
      </div>
      <div>
        <h2>friends.map()</h2>
      </div>
      <div>
        <h2>Scrounger</h2>
      </div>
    </div>
  );
}
