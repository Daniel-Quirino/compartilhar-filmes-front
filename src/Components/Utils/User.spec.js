
import { formatarIdade, formatarAltDaImagem } from './User';
describe('Formatar informações do usuário', () => {
   
  it('Formatar idade de usuário com 19 anos', () => {
      expect(formatarIdade(19)).toEqual('19 anos');
  });
  it('Formatar idade de usuário que não informou a idade', () => {
    expect(formatarIdade()).toEqual('Idade não Informada');
  });
  it('Formatar idade de usuário com 54 anos', () => {
    expect(formatarIdade(54)).toEqual('54 anos');
  });
});

describe('Formatar alt da Imagem', () => {
   
  it('Formatar alt da Imagem do usuário Pedro Paulo', () => {
      expect(formatarAltDaImagem('Pedro Paulo')).toEqual('Avatar do usuário Pedro Paulo');
  });
  it('Formatar alt da Imagem do usuário Augusto', () => {
    expect(formatarAltDaImagem('Augusto')).toEqual('Avatar do usuário Augusto');
  });
});
