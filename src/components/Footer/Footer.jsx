import styles from './Footer.css';

export default function Footer() {
  const { footer } = styles;
  return (
    <footer className={footer}>
      <a href="https://www.linkedin.com/in/bailey-kuebelbeck/">LinkedIn</a>
      <a href="https://github.com/baileykue">Github</a>
      <a>Email</a>
    </footer>
  );
}
