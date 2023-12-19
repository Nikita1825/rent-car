import styled from '@emotion/styled';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

export const BtnHeart = styled.button`
  position: relative;
  top: 35px;
  left: 240px;
  z-index: 2;
  background-color: transparent;
  border: none;
`;
export const FillHeart = styled(AiFillHeart)`
  color: #3470ff;
`;

export const StrokeHeart = styled(AiOutlineHeart)`
  color: white;
`;