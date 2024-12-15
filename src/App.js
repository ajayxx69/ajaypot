import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import {darkTheme} from './utils/Themes';
import Navbar from './components/Navbar.jsx';
import Hero from './components/HeroSection.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden; 
`
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <Body>
        <Hero/>
        <Wrapper>
          <Skills/>
          <Experience/>
          <Projects/>
        
        </Wrapper>
        <Education/>
        <Contact/>
      <Footer/>
      </Body>
    </ThemeProvider>
  );
}

export default App;