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
        <a>About</a>
        <a>Projects</a>
        <a>Resume</a>
      </div>
    </header>
  );
}
