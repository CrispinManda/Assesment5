
async function fetchNotes() {
    try {
      const response = await fetch('http://localhost:3000/notes');
      if (response.ok) {
        const notes = await response.json();
        displayNotes(notes);
      } else {
        console.error('Failed to fetch notes');
      }
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  }
  

  function displayNotes(notes: any[]) {
    const notesList = document.getElementById('notesList');
    if (notesList) {
      notesList.innerHTML = '';
      notes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
          <h5>${note.Title}</h5>
          <p>${note.Content}</p>
          <small>Created at: ${note.CreatedAt}</small>
        `;
        notesList.appendChild(noteCard);
      });
    }
  }
  

  async function addNote() {
    const title = document.getElementById('noteTitle') as HTMLInputElement;
    const content = document.getElementById('noteContent') as HTMLInputElement;
  
    try {
      const response = await fetch('http://localhost:3000/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Title: title.value, Content: content.value }) 
      });
      if (response.ok) {
        title.value = '';
        content.value = '';
        fetchNotes();
      } else {
        console.error('Failed to add note');
      }
    } catch (error) {
      console.error('Error adding note:', error);
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    fetchNotes(); 
  
    const addNoteForm = document.getElementById('addNoteForm');
    if (addNoteForm) {
      addNoteForm.addEventListener('submit', event => {
        event.preventDefault();
        addNote();
      });
    }
  });
  