import React from 'react'

const AddUser = ({age,username,setChangeUsername,setChangeAge,handleSubmit,date,setChangeDate,editable}) => {
    return (
        <React.Fragment>
            <div className="container d-flex justify-content-center mt-2">
                <form className="w-50" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label><strong>Username:</strong></label>
                        <input 
                         type="text" 
                         className="form-control"
                         placeholder="Enter username"
                         value={username}
                         onChange={setChangeUsername}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Age (Years):</strong></label>
                        <input 
                         type="number" 
                         className="form-control" 
                         placeholder="Enter age (years)"
                         value={age}
                         onChange={setChangeAge}
                         />
                    </div>
                    <div className="form-group">
                        <label><strong>Date:</strong></label>
                        <input required className="form-control" type="date" placeholder="Enter date"  min='2019-01-01'
                        max='2022-12-31' value={date} onChange={setChangeDate}/>
                    </div>
                    <button type="submit" className="btn btn-primary">{editable?"Edit User":"Add User"}</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default AddUser;