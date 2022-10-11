import { useState, useEffect, useReducer } from 'react'

import { BoutonContainer } from '../Styles/Bouton';

function Bouton({value, handle}) {
    return (
        <BoutonContainer onClick={handle} value={value}>{value}</BoutonContainer>
    );
}

export default Bouton;