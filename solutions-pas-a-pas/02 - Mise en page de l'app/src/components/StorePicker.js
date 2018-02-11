import React from 'react';

class StorePicker extends React.Component {
  render() {
    // Dans tout les cas, afficher
    return (
      <form className="store-selector">
        <h2>Entrez un nom de magasin</h2>
        <input type="text" required placeholder="Nom du magasin" />
        <button type="submit">Visiter le magasin →</button>
      </form>
    )
  }
}

export default StorePicker;
