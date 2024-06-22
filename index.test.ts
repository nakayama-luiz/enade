import {filtrarMarca,somarVeiculos, filtrarAno} from './index'


describe('Valida as funções', ()=>{
   test('Testa o filtro da marca através da quantidade de carros encontrados.',()=>{

    const resultado = filtrarMarca("VolksWagen")
    expect(resultado.carros.length).toBe(4)

   }) 

    test('Testa o filtro de marca através da quantidade de motos retornadas', ()=>{

        const resultado = filtrarMarca("VolksWagen")
        expect(resultado.motos.length).toBe(0)
    })

    test('Testa a soma total de veículos', ()=>{

        const resultado = somarVeiculos("Honda")
        expect(resultado).toBe(44000)
    })
   
    test('Testa o filtro de carros por ano', ()=>{
        const resultado = filtrarAno(2019)

        resultado.forEach(AnoFiltroVeiculos => {
            expect(AnoFiltroVeiculos.ano).toBeGreaterThan(2019)
        });
    })
    

})