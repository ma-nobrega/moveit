import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:100vh;
  display:grid;
    grid-template-columns: auto 1fr;
    grid-template-areas:
    'HD CT';
    gap: 0 2rem;
`

export const Content = styled.div`
  grid-area: CT;
  display:flex;
  flex-direction:column;
  section{
    flex: 1;
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
    'CC CC'
    'CD CB';
    gap: 0 6.25rem;
    align-content:center;
    margin: 1rem 0;
    @media(max-width: 720px){
      display:flex;
      flex-direction: column;
      justify-content: space-around;
      gap:0;
      margin-top: 2.4rem;
      >div + div{
        margin: 2.4rem 0;
      }
    }
  }
`;
