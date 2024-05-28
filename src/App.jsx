import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import './App.css';

// testing github acct

export default function App() {
  return (
    <Layout>
      <About />
      <Projects />
      <Resume />
    </Layout>
  );
}
