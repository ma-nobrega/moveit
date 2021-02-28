import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
  }

  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #DCDDE0;
    --text: #666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965e0;
    --blue-dark: #4953b8 ;
    --blue-twitter: #2aa9e0 ;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }

  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }

  body{
    font-family:'Inter', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  body, input, textarea, button{
    font:400 1rem "Inter", sans-serif;

  }

  button{
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  .container{
    height:100vh;
    max-width: 992px;
    margin: 0 auto;
    padding: 0rem 2rem;
  }
`;
