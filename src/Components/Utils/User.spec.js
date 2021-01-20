import { formatarIdade, formatarAltDaImagem } from '../Utils/User';

describe('Formatar informações do usuário', () => {
   
  it('Formatar idade de usuário com 19 anos', () => {
      expect(formatarIdade(19)).toEqual('19 anos');
  });

});
