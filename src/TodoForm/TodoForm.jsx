import React, { Component } from 'react';
import './TodoForm.css';

class NoteForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            newNoteContent: '',
        };

        this.handleUserInput = this.handleUserInput.bind(this);
        this.writeNote = this.writeNote.bind(this);
    }

    // When the user input changes, set the newNoteContent
    // to the value of what's in the input box.
    handleUserInput(e){
        this.setState({
            newNoteContent: e.target.value, // the value of the text input
        })
    }

    // handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         //  newNoteContent: this.handleUserInput(this);
    //         console.log("test");
    //     }
    // }

    writeNote(){
        // call a method that sets the noteContent for a note to
        // the value of the input
        this.props.addNote(this.state.newNoteContent);

        // Set newNoteContent back to an empty string.
        this.setState({
            newNoteContent: '',
        })
    }

    render(){
        return(
            <div className="formWrapper">
                <input className="todoInput"
                placeholder="Truc à faire..."
                autoFocus
                onKeyDown={this.handleKeyDown}
                value={this.state.newNoteContent} 
                onChange={this.handleUserInput} />
                <button className="todoButton"
                onClick={this.writeNote}>Add Note</button>
            </div>
        )
    }
}

export default NoteForm;