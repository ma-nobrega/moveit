import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CB;
  height:100%;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  text-align:center;
  padding: 0 1.5rem;
  @media(max-width: 720px){
    padding: 0.8rem;
  }
`;


export const NotActive = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  strong{
    font-size: 1.5rem;
    font-weight: 500;
    line-height:1.4;
  }
  p{
    display:flex;
    align-items:center;
    flex-direction:column;
    line-height:1.4;
    max-width:70%;
    margin-top: 3rem;
    img{
      margin-bottom: 0.5rem;
    }
  }
  @media(max-width: 720px){
    height: 16rem;
  }
`;

export const Active = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  header{
    color: ${props => props.theme.colors.primary};
    font-weight:600;
    font-size: 1.25rem;
    padding: 1rem 0;
    border-bottom: 1px solid ${props => props.theme.colors.grayLine};;
  }
  main{
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    strong{
      font-size: 2rem;
      font-weight: 600;
      color: ${props => props.theme.colors.title};
      margin: 1.5rem 0 1rem;
    }
    p{
      line-height: 1.5;
    }
    img{
      margin: 2rem 0 1.5rem 0;
    }
  }
  footer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    padding: 1rem 0;
  }
`;

export const ChallengeButton = styled.button`
  height: 3rem;
  display: flex;
  align-items:center;
  justify-content:center;
  border: 0;
  border-radius: 5px;
  color: ${props => props.theme.colors.buttonTextColor};
  font-size: 1rem;
  font-weight: 600;
  transition: filter 0.2s;
  &.failed{
    background: ${props => props.theme.colors.red};
  }
  &.succeeded{
    background: ${props => props.theme.colors.green};
  }
  &:hover{
    filter: brightness(0.9);
  }
`;
