import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --background: #F0F2F5;
        --shape: #FFFFFF;

        --red: #E52E4D;
        --blue: #5429CC;

        --blue-light: #6933FF;
        --text-title: #363F5F;
        --text-body: #969CB3;

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

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }


`

