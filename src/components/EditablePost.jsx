import React from "react";

export default class EditablePost extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return(
            <div classname="editablePostContainer">
                {/* editable author field */}
                <label htmlFor="authorField">Author:</label>
                <input type="text" name="authorField" id="authorField" value={this.props.author} />

                {/* editable location field */}
                <label htmlFor="locationField">Location:</label>
                <input type="text" name="locationField" id="locationField" value={this.props.location} />

                {/* editable content field */}
                <label htmlFor="contentField">Content:</label>
                <input type="text" name="contentField" id="contentField" value={this.props.content} />

            </div>
        )
    }
}