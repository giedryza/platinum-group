import React from 'react';

import { ReactComponent as Battery } from '../../assets/icons/battery.svg';
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg';
import { ReactComponent as Converter } from '../../assets/icons/converter.svg';
import { ReactComponent as Electronics } from '../../assets/icons/electronics.svg';
import { ReactComponent as Email } from '../../assets/icons/email.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Phone } from '../../assets/icons/phone.svg';

export enum IconName {
  Battery,
  ChevronLeft,
  ChevronRight,
  Converter,
  Electronics,
  Email,
  Facebook,
  Instagram,
  Logo,
  Phone,
}

enum FillType {
  Fill = 'fill',
  Stroke = 'stroke',
  None = 'none',
}

interface Props {
  icon: IconName;
  svgProps?: React.SVGAttributes<SVGElement>;
}

const Icon: React.FC<Props> = ({ icon, svgProps }) => {
  switch (icon) {
    case IconName.Battery:
      return <Battery {...svgProps} data-fill={FillType.Stroke} />;
    case IconName.ChevronLeft:
      return <ChevronLeft {...svgProps} data-fill={FillType.Stroke} />;
    case IconName.ChevronRight:
      return <ChevronRight {...svgProps} data-fill={FillType.Stroke} />;
    case IconName.Converter:
      return <Converter {...svgProps} data-fill={FillType.Stroke} />;
    case IconName.Electronics:
      return <Electronics {...svgProps} data-fill={FillType.Stroke} />;
    case IconName.Email:
      return <Email {...svgProps} data-fill={FillType.Stroke} />;
    case IconName.Facebook:
      return <Facebook {...svgProps} data-fill={FillType.Fill} />;
    case IconName.Instagram:
      return <Instagram {...svgProps} data-fill={FillType.Fill} />;
    case IconName.Logo:
      return <Logo {...svgProps} data-fill={FillType.None} />;
    case IconName.Phone:
      return <Phone {...svgProps} data-fill={FillType.Stroke} />;
    default:
      return null;
  }
};

export default Icon;
