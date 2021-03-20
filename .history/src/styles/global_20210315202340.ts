import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --background: #F0F2F5;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    //font-size: 16px - padrão(Desktop)
    html { 
        @media(max-width: 1080px){
            font-size: 93.75%; // Vai fazer com que o font-size tenha 15px
        }

        @media(max-width: 720px){
            font-size: 87.5%; // Vai fazer com que o font-size tenha 14px
        }
    }

    // REM = 1rem = font-size padrão da página. 

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; 
    }

    button {
        cursor: pointer;
    }


`

