import { FC, HTMLAttributes } from 'react';

interface PartnerProps extends HTMLAttributes<HTMLDivElement> {}
const Partner: FC<PartnerProps> = ({}) => {
  return <div className="grid grid-rows-1 items-center gap-x-4">Partner</div>;
};

export default Partner;
