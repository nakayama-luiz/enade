import { convertToObject } from "typescript"
import * as dados from "./veiculos.json"

export function filtrarMarca(marca: string) {
    const carros = [
      ...dados.carros.novos.filter(novidade => novidade.marca === marca),
      ...dados.carros.usados.filter(utilizado => utilizado.marca === marca)
    ];
    
    const motos = [
      ...dados.motos.novos.filter(moto => moto.marca === marca),
      ...dados.motos.usados.filter(velha => velha.marca === marca)
    ];
  
    return { carros, motos };
}

export function somarVeiculos(marca: string){
    const { carros, motos } = filtrarMarca(marca);

  const valorTotalCarros = carros.reduce((total, carro) => total + carro.valor, 0);
  const valorTotalMotos = motos.reduce((total, moto) => total + moto.valor, 0);

  return valorTotalCarros + valorTotalMotos;

}

export function filtrarAno(ano: number) {
    const veiculos = [
      ...dados.carros.novos.filter(novidade => novidade.ano > ano),
      ...dados.carros.usados.filter(utilizado => utilizado.ano > ano),
      ...dados.motos.novos.filter(moto => moto.ano > ano),
      ...dados.motos.usados.filter(velha => velha.ano > ano)
    ];
  
    return veiculos;
  }