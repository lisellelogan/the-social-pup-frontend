import React from 'react';

const Friend = (props) => {
    return (
        <div>
            <li>
                <img src={props.friend.picture} alt={props.friend.picture} /><br/>
                Pup Name: {props.friend.pup_name}<br/>
                Pup Age: {props.friend.pup_age}<br/>
                Email: {props.friend.email}<br/>
            </li>
            {/* will add event listener to delete friend */}
            <button>Remove Friend</button><br/><br/>
        </div>
    )
}

export default Friend;