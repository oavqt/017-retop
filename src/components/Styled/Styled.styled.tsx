import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

const Styled = styled.createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

  body {
    font-family: 'Poppins', sans-serif;
  }

  fieldset {
    margin: 0;
    min-width: 25%;
  }

  @media print {
    body {
      -webkit-print-color-adjust: exact !important;
    }

    .root > div {
      height: 100%;
    }

    main {
      padding: 0 !important;
    }

    main > section:first-of-type,
    main > footer {
      display: none !important;
    }

    main section:nth-of-type(2) {
      overflow-y: unset;
    }
  }

  @page {
    margin: 5mm;
    size: auto;
  }
`;

export default Styled;
