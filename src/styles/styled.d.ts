import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme{
    title: string,
    colors:{
      backgroundSecondary: string,
      background: string,
      grayLine: string,
      text: string,
      textHighlight: string,
      title: string,
      red: string,
      green: string,
      primary: string,
      blueTwitter: string,
      buttonTextColor: string,
    }
  }
}
