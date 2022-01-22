import { createGlobalStyle } from 'styled-components';

const Styled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    body{
       font-family: 'Poppins', sans-serif
    }

    fieldset {
        margin: 0;
        min-width: 25%
    }   
`;

export default Styled;
