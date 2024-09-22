
import React, { useState } from 'react';
import "./DropArea.css";

const DropArea = ({ changeOnDrop }) => {
    const [showDrop, setShowDrop] = useState(false);

    // Handle drop event when an item is dropped
    const handleDrop = (e) => {
        e.preventDefault(); // Prevent default drag-and-drop behavior
        changeOnDrop(); // Call the function passed as a prop
        setShowDrop(false); // Hide the drop area after the drop
    };

    return (
        <section 
            className={showDrop ? 'drop-area' : 'hide-area'} 
            onDragOver={(e) => e.preventDefault()} // Allow item to be dragged over
            onDragEnter={() => setShowDrop(true)} // Show drop area when dragging starts
            onDragLeave={() => setShowDrop(false)} // Hide drop area when dragging leaves
            onDrop={handleDrop} // Assign handleDrop to the onDrop event
        >
            Drop here
        </section>
    );
};

export default DropArea;
