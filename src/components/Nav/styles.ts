import styled from 'styled-components';

export const Container= styled.div`
  grid-area: HD;
  width: 6rem;
  padding: 2rem 0;
  display:flex;
  flex-direction: column;
  align-items:center;
  justify-content: space-between;
  background: ${props => props.theme.colors.backgroundSecondary};
  svg, img{
    height: 2rem;
    width: 2rem;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
  }
`;
