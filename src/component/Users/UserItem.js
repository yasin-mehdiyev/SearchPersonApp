import React from 'react'

const UserItem = ({item,deletedUser,editedUser}) => {
    const {id,username,age,date} = item;
    let year = new Date(date).getFullYear();
    return (
        <div className="container w-50">
            <li className="list-group-item d-flex justify-content-between">
                <div className="d-flex align-items-center">
                   <strong>Username:</strong>  {username} - <strong>Age:</strong>  {age} - <strong>Year: </strong> {year}
                </div>
                <div>
                    <button className="btn btn-primary" onClick={()=>editedUser(id)}>Edit</button>
                    <button className="btn btn-danger ml-2" onClick={()=>deletedUser(id)}>Delete</button>
                </div>
            </li>
        </div>
    )
}

export default UserItem;