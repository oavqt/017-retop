import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const Styled = styled.createGlobalStyle`
  body {
    font-family: 'Poppins', sans-serif;
  }

  fieldset {
    margin: 0;
    min-width: 25%;
  }

  @media print {
    @page {
      margin: 5mm;
      size: auto;
    }

    body {
      -webkit-print-color-adjust: exact !important;
    }

    main {
      padding: 0 !important;
    }

    main > section:nth-of-type(1),
    main > section:nth-of-type(2),
    main > footer {
      display: none !important;
    }

    main section:nth-of-type(3) {
      display: block !important;
      overflow-y: unset;
    }
  }

  @media screen and (max-width: 1200px) {
    main > section:nth-of-type(1) {
      display: block;
    }

    main > section:nth-of-type(2) {
      width: 100%;
    }

    main > section:nth-of-type(2) {
      width: 100%;
    }

    main > section:nth-of-type(3) {
      display: none;
    }

    main > footer {
      left: 0;
      position: absolute;
    }
  }

  @media screen and (max-width: 300px) {
    main > header {
      display: none !important;
    }
    main > footer {
      display: none !important;
    }
  }
`;

export default Styled;
