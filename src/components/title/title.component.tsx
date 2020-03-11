import React from 'react';

interface Props {
  titleUp: string;
  titleDown?: string;
}

const Title: React.FC<Props> = ({ titleUp, titleDown }) => (
  <div className="title">
    <h2 className="title__heading">
      <span className="title__up">{titleUp}</span>
      {titleDown && <span className="title__down">{titleDown}</span>}
    </h2>
  </div>
);

export default Title;
