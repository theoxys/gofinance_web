import { createGlobalStyle, keyframes } from "styled-components";

const fade = keyframes`
    from {
        opacity: 0;
    }to{
        opacity: 1;
    }
`;

const fadeFromDown = keyframes`
    from {
        opacity: 0;
        transform: translateY(100px);
    }to{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #141530;
        --box: #1C1D3F;

        --red: #E52E4D;
        --green: #85CC9D;
        --rgba-green: 133, 204, 157, 0.2;

        --primary: #4639C2;
        --rgba-primary: 70, 57, 194;

        --text: #ffff;
        
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;

    }

    html {
        @media (max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        height: 100vh;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 500;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
        background-color: rgba(0,0,0,0.4);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;

        display: flex;
        align-items: center;
        justify-content: center;
        animation: ${fade} 0.2s;


    }

    .react-modal-content{
        width:100%;
        max-width: 600px;
        height: fit-content;
        padding: 3rem;
        background-color: var(--box);
        position: relative;
        border-radius: 0.5rem;
        outline: none;
        animation: ${fadeFromDown} 0.1s ease;
    }
`;
