import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <Primera app/>', () => {
//   test('Debe mostar el mensaje "Hola soy goku"', () => {
//     const saludo = 'Hola soy goku';

//     const { getByText } = render(<PrimeraApp saludo={saludo} />);

//     expect(getByText(saludo)).toBeInTheDocument();
//   });


    test('debe mostrar <Primera app/> correctamente', () => {
        const saludo = 'Hola soy goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola soy goku';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp saludo={saludo} subtitulo={subtitulo} />);
        const textoParrafo  = wrapper.find('p').text();
        console.log(textoParrafo);
        expect(textoParrafo.trim()).toBe(subtitulo);
    });
    
    


});
