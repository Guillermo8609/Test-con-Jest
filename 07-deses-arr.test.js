import { retornaArreglo} from '../../base/07-deses-arr'
import '@testing-library/jest-dom'
import { isCompositeComponent } from 'react-dom/test-utils';

describe('Pruebas en desetructuracion de arreglos', () => {
    

        test('Deberetornar un string y un numero', () => {
            
            
            const [letras, numeros] = retornaArreglo(); //['ABC', 123];  

            //expect(arr).toEqual( ['ABC', 123])
            
            expect(letras).toBe('ABC')
            expect(typeof letras).toBe('string')
            
           
            expect(numeros).toBe(123)
            expect(typeof numeros).toBe('number')
            

        })
        


})

