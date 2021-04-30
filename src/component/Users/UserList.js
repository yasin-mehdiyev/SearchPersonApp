import React from 'react'
import UserItem from './UserItem'

const UserList = ({users,deleteUser,setChangeFilteredDate,filteredDate,editUser}) => {
    let isExisted=false;
    return (
        <React.Fragment>

            <div className="container d-flex justify-content-center mt-4">
                <form>
                    <label htmlFor="#"><strong>Filtered Years:</strong></label>
                    <select className="browser-default custom-select" onChange={setChangeFilteredDate}>
                        <option selected value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                    </select>
                </form>
            </div>

            <ul className="list-group list-unstyled mt-4">
                {
                    users.map(user => {
                        if(new Date(user.date).getFullYear()==filteredDate){
                           isExisted=true;
                           return <UserItem 
                           key={user.id}
                           item={user}
                           deletedUser={deleteUser}
                           editedUser={editUser}
                         />
                        }
                    })
                }

                {
                    !isExisted?
                    <p className="text-center">Not Found</p>
                    :null
                }
            </ul>
        </React.Fragment>
    )
}

export default UserList;