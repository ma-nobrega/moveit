import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction:column;
  section{
    flex: 1;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content:center;
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
`
