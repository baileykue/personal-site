import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

export default function App() {
  return (
    <div>
      <Layout>
        <About />
        <Projects />
        <Resume />
      </Layout>
    </div>
  );
}
