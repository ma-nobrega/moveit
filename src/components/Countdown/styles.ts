import styled from 'styled-components';
import { darken } from 'polished';


export const Container = styled.div`
  grid-area: CD;
  display:flex;
  flex-direction:column;
  justify-content: center;
  order:3;
`;

export const Timer = styled.div`
  display:flex;
  align-items:center;
  font-family: Rajdhani;
  font-weight:600;
  color: ${props => props.theme.colors.title};
  >div{
    flex:1;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    background: ${props => props.theme.colors.backgroundSecondary};
    box-shadow: 0 0 60px rgba(0,0,0, 0.05);
    border-radius:5px;
    font-size:8.5rem;
    text-align:center;
    span{
      flex:1;
      &:first-child{
        border-right: 1px solid ${props => props.theme.colors.background};
      }
      &:last-child{
        border-left: 1px solid ${props => props.theme.colors.background};
      }
    }
  }
  >span{
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }
`;

export const CountdownButton = styled.button`
  width:100%;
  height: 5rem;
  margin-top: 2rem;
  display:flex;
  align-items:center;
  justify-content:center;
  border:0;
  border-radius:5px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.buttonTextColor};
  font-size:1.25rem;
  font-weight:600;
  transition: background-color 0.2s;
  &:not(:disabled):hover {
    background-color: ${props => darken(0.05, props.theme.colors.primary)};
  }
  >svg, img{
    margin-left: 0.5rem;
  }
  &.active{
    background-color: ${props => props.theme.colors.backgroundSecondary};
    color: ${props => props.theme.colors.title};
    &:not(:disabled):hover {
      background-color: ${props => props.theme.colors.red};
      color: ${props => props.theme.colors.backgroundSecondary};
      >img{
        color: ${props => props.theme.colors.backgroundSecondary};
      }
    }
  }
  &:disabled{
    background-color: ${props => props.theme.colors.backgroundSecondary};
    color: ${props => props.theme.colors.text};
    cursor: not-allowed;
  }
`;
