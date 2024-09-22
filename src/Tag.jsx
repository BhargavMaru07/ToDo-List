import React from 'react';
import "./Tag.css"

const Tag = ({name,selectTag,selected}) => {

    let styles = {
        HTML:{backgroundColor:"#fda821"},
        CSS:{backgroundColor:"#18d4c8"},
        JavaScript:{backgroundColor:"#ffd12c"},
        React:{backgroundColor:"#4cdafc"},
        default:{backgroundColor:"#f9f9f9"}
    }


    return (
        <button type='button' onClick={()=>selectTag(name)} className="tag" style={selected ? styles[name] : styles.default}>{name}</button>
    );
};

export default Tag;

// generally all buttons type is submit so in tag component we click button then form will submit so change button type to button