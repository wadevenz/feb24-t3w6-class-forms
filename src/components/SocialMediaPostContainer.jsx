import React from "react";
import ReadonlyPost from "./ReadonlyPost";
import EditablePost from "./EditablePost";

export default class SocialMediaPostContainer extends React.Component {
    constructor(){
        super();

        this.state = {
            isEditing: false,
            author: '',
            dateCreated: Date.now(),
            lastUpdated: Date.now(),
            location: "",
            content: ""
        }
    }

    updatePostData = (newAuthor, newLocation, newContent) => {
        this.setState({
            author: newAuthor,
            lastUpdated: Date.now(),
            location: newLocation,
            content: newContent
        });
    }

    toggleEditMode = () => {
        this.setState({isEditing: !this.state.isEditing});
    }

    render(){

        if (this.state.isEditing){
            return(
                <>
                    <button onClick={this.toggleEditMode}>
                    Toggle Edit Mode
                    </button>
                    <EditablePost 
                        author={this.state.author} 
                        dateCreated={this.state.dateCreated} 
                        lastUpdated={this.state.lastUpdated}
                        location={this.state.location}
                        content={this.state.content} 
                        updateData={this.updatePostData}
                    />
                </>
                
            )
        } else {
            return(
                <>
                     <button onClick={this.toggleEditMode}>
                    Toggle Edit Mode
                    </button>
                    <ReadonlyPost
                    author={this.state.author} 
                    dateCreated={this.state.dateCreated} 
                    lastUpdated={this.state.lastUpdated}
                    location={this.state.location}
                    content={this.state.content} 
                />
        
                </>
            )
                
        }
    }
}