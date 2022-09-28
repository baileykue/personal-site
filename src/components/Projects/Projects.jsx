import styles from './Projects.css';
import login_resourcery from '../../assets/resourcery/login_resourcery.png';
import login_friendsmap from '../../assets/friendsmap/login_friendsmap.png';
import login_scrounger from '../../assets/scrounger/login_scrounger.png';

export default function Projects() {
  const { projects, resourcery, friendsmap, scrounger, project_bio } = styles;

  return (
    <div className={project_bio}>
      <h1>Projects</h1>
      <p>These are some of the lovely apps I've built!</p>
      <div id="projects-id" className={projects}>
        <div className={resourcery}>
          <h2>
            Resourcery
            <img src={login_resourcery} />
          </h2>
          <p>
            Resourcery is an App that enables people to support others directly
            with free resources on a personal level. Users are able to post
            anything from free food, pet supplies, camping supplies to services
            for those in need. Built with ReactJS, CSS, PostgreSQL and Express.
          </p>
        </div>
        <div className={friendsmap}>
          <h2>
            friends.map()
            <img src={login_friendsmap} />
          </h2>
          <p>
            A convenient travel companion app to keep your group safe and
            organized when in unfamiliar places.
          </p>
        </div>
        <div className={scrounger}>
          <h2>
            Scrounger
            <img src={login_scrounger} />
          </h2>
          <p>
            An app that encourages users to explore and solve puzzles that lead
            to real-world adventures and shared experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
