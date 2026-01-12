import { useEffect, useState } from "react"

export default function NoteKeeper() {

    const [note, setNote] = useState('');
    const [lastSaved, setLastSaved] = useState('Never');

    // load saved note when component first mounts
    useEffect(() => {
        const savedNote  = localStorage.getItem('note');
        if(savedNote) {
            setNote(savedNote);
            setLastSaved('Loaded from storage');
        }
    }, []); // Empty array = run only one time  

    // save note to local storage whenever it chnages
    useEffect(() => {
        if(note !== ''){ //only save if note in not empty
            localStorage.setItem('note', note);
            const now = new Date().toLocaleTimeString();
            setLastSaved(now)
        }
    }, [note])

    const clearNote = () => {
        setNote('');
        localStorage.removeItem('note');
        setLastSaved('Cleared')
    }

  return (
    <div style={{padding: '20px'}}>
        <h2>Auto-Save Note Keeper</h2>
        <textarea name="" id=""
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Type your note.."
        rows= '10'
        cols = '50'
        style={{display: 'block', marginBottom: '10px'}}
        />
        <p>Character Count: {note.length}</p>
        <p>Last Saved: {lastSaved}</p>

        <button onClick={clearNote}>Clear Note</button>
    </div>
  )
}
