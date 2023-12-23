import { styled } from 'styled-components';
import { MdClose } from 'react-icons/md';

export const CarsOptions = styled.p`
  font-family: 'Manrope-400';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: rgba(18, 20, 23, 0.8);
  margin-top: 8px;
  gap: 12px
`;
export const Item = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  
color: rgba(18, 20, 23, 0.8);
  :not(:last-child) {
    border-right: 1px solid rgba(18, 20, 23, 0.2)};
    
    padding-right: 4px;
  }
`;
export const DescriptionBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  padding-left: 0

`;
export const CarsModalOptions = styled.p`
  font-family: 'Manrope-400';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: rgba(18, 20, 23, 0.8);
  margin-top: 4px;
  gap: 12px;
`;
export const Accessories = styled.p`
  font-family: 'Manrope-400';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: rgba(18, 20, 23, 0.8);
  margin-top: 4px;
  gap: 12px;
`;
export const Functionalities = styled.p`
  font-family: 'Manrope-400';
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  color: rgba(18, 20, 23, 0.8);
  margin-top: 4px;
  gap: 12px;
`;
export const Conditions = styled.p`
  
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  
`;
export const CloseIcon = styled(MdClose)`
  color: black;
  
`;