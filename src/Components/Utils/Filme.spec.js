import { formatarAltDeFilmes } from '../Utils/Filme';

describe('Formatar informações dos filmes', () => {
   
  it('Formatar alt do Filme Minha mae é uma peça', () => {
      expect(formatarAltDeFilmes('Minha mae é uma peça')).toEqual('Cartaz do filme Minha mae é uma peça');
  });
});