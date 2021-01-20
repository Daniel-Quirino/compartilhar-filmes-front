export const formatarIdade = (idade = '') => {
  if (!idade) return 'Idade não Informada';
  return `${idade} anos`;
}

export const formatarAltDaImagem = (name) => {
  return `Avatar do usuário ${name}`;
}
