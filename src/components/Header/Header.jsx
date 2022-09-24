import styles from './Header.css';
import logo from '../../assets/logo.png';

export default function Header() {
  const { header, bk_logo, menu } = styles;
  return (
    <header className={header}>
      <div className={bk_logo}>
        <img src={logo} />
      </div>
      <div className={menu}>
        <a href="#about-id">About</a>
        <a href="#projects-id">Projects</a>
        <a href="#resume-id">Resume</a>
      </div>
    </header>
  );
}
