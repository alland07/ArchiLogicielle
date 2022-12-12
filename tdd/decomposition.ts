export const Decomposition = (nombre : number): Array<Number> => {
  if (nombre === 0) return [0];
  if (nombre === 1) return [];

  const facteurs: number[] = [];
  let reste = nombre;
  let diviseur = 2; // on commence par 2, car 1 est traité au-dessus
  while (reste > 1) { // tant qu'il reste des facteurs à trouver
    if (reste % diviseur === 0) { // diviseur est un facteur → on l'ajoute
      facteurs.push(diviseur);
      reste /= diviseur; // on divise le reste par le diviseur, puis on le traite à nouveau
    } else { // diviseur n'est pas un facteur → on passe au suivant
      diviseur++;
    }
  }
  return facteurs;
};



