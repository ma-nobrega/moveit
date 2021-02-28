import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns:repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas:
    'Img XP XP XP XP XP';
  gap: 2rem;
`;

export const Image = styled.div`
  grid-area: Img;
  display: flex;
  align-items:center;
  justify-content: center;
   >img{
    width:5.5rem;
    border-radius:50%;
  }
`;

export const Experience = styled.div`
  grid-area: XP;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  div:first-child{
    display:flex;
    align-items: center;
    justify-content: space-between;
      strong{
      font-size: clamp(0.5rem , 1.2rem, 1.8rem);
      font-weight:600;
      color: var(--title);
    }
    @media(max-width:430px){
      flex-direction:column;
      align-items: flex-start;
    }
  }
`;

export const Level = styled.div`
  p{
    display:flex;
    align-items:center;
    font-size:1rem;
    margin:0.5rem 0;
    img{
      margin-right: 0.5rem;
    }
  }

`;
