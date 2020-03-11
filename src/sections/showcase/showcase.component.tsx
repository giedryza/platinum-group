import React from 'react';
import { scrollToRef } from '../../utils/scrollToRef';
import ButtonFlat from '../../components/button-flat/button-flat.component';

const TOP_OFFSET = 100;

interface Props {
  scrollRef: React.RefObject<HTMLElement>;
}

const Showcase: React.FC<Props> = ({ scrollRef }) => {
  const executeScroll = () => scrollToRef(scrollRef, TOP_OFFSET);

  return (
    <header className="showcase">
      <div className="showcase__content">
        <h3 className="showcase__subtitle">We recycle</h3>
        <h1 className="showcase__title">Catalytic converters</h1>
        <ButtonFlat label="Find out more" onClick={executeScroll} inverse />
      </div>
    </header>
  );
};

export default Showcase;
