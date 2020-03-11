import React from 'react';
import Title from '../../components/title/title.component';
import Icon, { IconName } from '../../components/icon/icon.component';

interface Props {
  scrollRef: React.RefObject<HTMLElement>;
}

const cards = [
  {
    label: 'Converters',
    icon: IconName.Converter,
  },
  {
    label: 'Batteries',
    icon: IconName.Battery,
  },
  {
    label: 'Electronics',
    icon: IconName.Electronics,
  },
];

const About: React.FC<Props> = ({ scrollRef }) => (
  <section className="about" ref={scrollRef}>
    <div className="container">
      <Title titleUp="what we" titleDown="buy" />
      <p className="about__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi natus
        assumenda dolor facere dolorem voluptatibus culpa aut. Enim rem culpa
        temporibus eligendi maxime rerum dolore molestiae inventore harum!
        Cupiditate ullam illum laudantium totam ipsa praesentium illo accusamus
        animi nam. Quisquam cumque error porro quam ad deserunt natus velit nemo
        excepturi hic. Accusantium excepturi, consectetur dolorum assumenda
        magni totam voluptates expedita eveniet dolor! Ducimus quae aperiam hic,
        accusantium dolores.
      </p>
      <div className="about__cards">
        {cards.map(({ label, icon }) => (
          <div className="about__card" key={label}>
            <div className="about__icon">
              <Icon icon={icon} />
            </div>
            <h4 className="about__label">{label}</h4>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
