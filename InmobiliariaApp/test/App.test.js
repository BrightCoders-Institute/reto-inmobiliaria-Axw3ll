import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';
import Card from '../components/Card';
import '@testing-library/jest-native/extend-expect';
describe('<App/>', () => { 
    it('Renders Correctly',()=>{
      renderer.create(<App/>)
    });
 });

 describe('Card Component', () => { 
    const propiedad = {
        item: {
          star: 4,
          Nombre: 'Nombre de la propiedad',
          Info: [
            {
              Ubicacion: 'Ubicación de la propiedad',
              Recamara: 3,
              Banios: 2,
              Espacio: '150 m²',
              Precio: '$200,000',
            },
          ],
        },
      };

      it('renders correctly with property data', () => {
        const { getByText, getByTestId } = render(<Card propiedad={propiedad} />);
    
        // Verifica que los elementos de texto estén presentes
        expect(getByText('Nombre de la propiedad')).toBeTruthy();
        expect(getByText('Ubicación de la propiedad')).toBeTruthy();
        expect(getByText('3')).toBeTruthy();
        expect(getByText('2')).toBeTruthy();
        expect(getByText('150 m²')).toBeTruthy();
        expect(getByText('$200,000')).toBeTruthy();
    
        // Verifica que el icono de estrella y su puntuación estén presentes
        expect(getByTestId('star-icon')).toBeTruthy();
        expect(getByText('4')).toBeTruthy();
    
        // Verifica que el botón de like esté presente
        expect(getByTestId('like-button')).toBeTruthy();
      });

      it('updates like state on button press', () => {
        const { getByTestId } = render(<Card propiedad={propiedad} />);
    
        const likeButton = getByTestId('like-button');
    
        // Simula el evento de pulsación en el botón de like
        fireEvent.press(likeButton);
    
        // Verifica que el estado de 'like' se haya actualizado a true
        expect(getByTestId('like-button')).toHaveStyle({ backgroundColor: 'green' });
    
        // Simula otra pulsación en el botón de like
        fireEvent.press(likeButton);
      });
  })