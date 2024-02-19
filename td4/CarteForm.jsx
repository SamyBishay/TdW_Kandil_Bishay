import React from 'react';

const CarteForm = () => {
  return (
    <div>
      <label htmlFor="symbole">Symbole:</label>
      <input type="text" id="symbole" name="symbole" />

      <label htmlFor="affichage">Affichage:</label>
      <select id="affichage" name="affichage">
        <option value="visible">Visible</option>
        <option value="hidden">Hidden</option>
      </select>

      <button type="submit">Soumettre</button>
    </div>
  );
};

export default CarteForm;
