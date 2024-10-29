import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #d9d9d9;
    color: #333;
    line-height: 1.6;
    font-size: 16px;
  }

  .temp-display-container{
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px; 
    margin-top: 20px

  }

  .temp-display-5-days-container{
    display: flex;
    flex-direction: row;
    padding: 50px;
    justify-content: evenly;
    background-color: #fff;
    border-radius: 10px; 
    margin-top: 20px

  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
    color: #353535;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #555;
  }

  a {
    color: #007BFF;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  input, button {
    font-size: 1rem;
    border: none;
    outline: none;
    font-family: inherit;
  }
    
  img{
    width: 20;
    height:20;
    }

  button {
    background-color: #284b63;
    color: #fff;
    padding: 0.75rem 1.25rem;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  input {
    width: 100%;
    max-width: 400px;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }


   
  .map-container {
    height: 400px; /* Altura do mapa */
    width: 100%;   /* Largura do mapa */
    position: relative; /* Para controle de sobreposição */
    margin-top: 10px;
    
  }

  /* Responsive Layout */
  .app-container {
    padding: 20px;
    text-align: center;
  }

  /* Layout for larger screens */
  @media (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2.5rem;
    }

    .app-container {
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }
  }

  /* Tablet and Mobile Layout */
  @media (max-width: 767px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.75rem;
    }

    input {
      width: 90%;
    }

    button {
      width: 100%;
      padding: 0.75rem;
    }
  }
`;