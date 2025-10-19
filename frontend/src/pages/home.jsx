import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note"
import "../styles/Home.css"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");


    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            // Backend endpoint for List: /api/notes/ (GET) - CORRECT
            const res = await api.get("/api/notes/");
            setNotes(res.data);
        } catch (err) {
            console.error("Failed to fetch notes:", err); 
            alert("Failed to fetch notes.");
        }
    };

    const deleteNote = async (id) => {
        try {
            // Backend endpoint for Delete: /api/notes/delete/<id>/ (DELETE) - CORRECT
            const res = await api.delete(`/api/notes/delete/${id}/`);
            if (res.status === 204) {
                alert("Note deleted!");
            } else {
                alert("Failed to delete note.");
            }
            await getNotes(); // Guarantees list refresh
        } catch (error) {
            console.error("Delete failed:", error);
            alert("Error deleting note.");
        }
    };

    const createNote = async (e) => {
        e.preventDefault();
        try {
            // Backend endpoint for Create: /api/notes/ (POST) - CORRECT
            const res = await api.post("/api/notes/", { content, title });
            
            if (res.status === 201) {
                alert("Note created!");
            } else {
                alert("Failed to make note.");
            }
            
            setContent("");
            setTitle("");
            await getNotes(); // Guarantees list refresh
        } catch (err) {
            console.error("Create failed:", err);
            alert("Error creating note.");
        }
    };

    return (
        // Add container class for background and padding
        <div className="home-container"> 
            <div className="max-w-container">
                {/* Header with custom styles */}
                <h1 className="main-header">
                    <span className="header-badge">
                        📒 Planner Notes
                    </span>
                    <span className="header-pin">📌</span> 
                </h1>

                {/* 1. Create Note Form (MOVED TO THE TOP) */}
                <div className="form-container">
                    <div className="clipboard-clip"></div>
                    <h2 className="form-header">Create a Note</h2>
                    
                    <form onSubmit={createNote}>
                        <label htmlFor="title" className="form-label">Title:</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            className="form-input"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        
                        <label htmlFor="content" className="form-label">Content:</label>
                        <textarea
                            id="content"
                            name="content"
                            required
                            className="form-textarea"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        
                        <input 
                            type="submit" 
                            value="Pin Note" 
                            className="submit-btn btn-press"
                        />
                    </form>
                </div>

                <div className="notes-grid">
                    {notes.length > 0 ? (
                        notes.map((note, index) => (
                            <Note 
                                note={note} 
                                onDelete={deleteNote} 
                                key={note.id} 
                                className="note-card"
                                style={{ '--i': index }} 
                            />
                        ))
                    ) : (
                        <p className="no-notes-message">
                            No memos stuck to the wall yet. Get writing! ✍️
                        </p>
                    )}
                </div>
                
            </div>
        </div>
    );
}

export default Home;