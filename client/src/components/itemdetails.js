import React from 'react';

const ItemDetailsPopup = ({ item, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        {item.availability}
        {item.brand}
        {item.category}
        {item.clothtoken}
        {item.color}
        {item.createdAt}
        {item.dateBroughtIn}
        {item.dateEdited}
        {item.dateSold}
        {item.gender}
        {item.id}
        {item.notes}
        {item.size}
        {item.staffBroughtIn}
        {item.staffEdited}
        {item.staffSold}
        {item.updatedAt}
        <button onClick={onClose} type="button">Close</button>
      </div>
    </div>
  );
};

export default ItemDetailsPopup;