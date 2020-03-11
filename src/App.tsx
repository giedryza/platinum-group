import React, { useRef } from 'react';
import Header from './sections/header/header.component';
import Showcase from './sections/showcase/showcase.component';
import Catalogue from './sections/catalogue/catalogue.component';
import About from './sections/about/about.component';
import Contact from './sections/contact/contact.component';
import Footer from './sections/footer/footer.component';

const App = () => {
  const scrollRef = useRef(null);

  return (
    <div>
      <Header />
      <Showcase scrollRef={scrollRef} />
      <About scrollRef={scrollRef} />
      <Catalogue />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
