import React from "react";
// Import the component-specific styles
import "../styles/Note.css"; 

// Update props to accept 'className' and 'style'
function Note({ note, onDelete, className, style }) { 
    // Format the date to show both date and a short time
    const formattedDate = new Date(note.created_at).toLocaleString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        // Apply the custom className and style (from Home.jsx) to the main container
        <div className={`note-container ${className}`} style={style}> 
            {/* Decorative element for the top corner */}
            <div className="note-corner-fold"></div> 

            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>

            <div className="note-footer">
                <p className="note-date">{formattedDate}</p>
                <button 
                    className="delete-button" 
                    onClick={(e) => {
                        // Prevent the note card hover animation from triggering on button click
                        e.stopPropagation(); 
                        onDelete(note.id);
                    }}
                >
                    <span role="img" aria-label="Delete">🗑️</span> Remove
                </button>
            </div>
        </div>
    );
}

export default Note;