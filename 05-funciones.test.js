import '@testing-library/jest-dom'



import { getUser, getUsuarioActivo } from '../../base/05-funciones'



describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe retornar un objeto ', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'

            
    }
    const user = getUser();

        expect( user ).toEqual( userTest)

    })

        //getUserActivo debe de retornar un bojeto
        

    test('getUsuarioActivo debe de retornar un bojeto', () => {
        
        const nombre = 'Guillermo'
        
        const user = getUsuarioActivo(nombre) 
        
        console.log(user)

        expect( user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
        
            
        })
        

   



        
    })
    




    

