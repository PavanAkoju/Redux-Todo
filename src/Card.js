import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import {AddUser} from './actions';
import { RemoveUser } from './actions';
import './Style.css'


const Card = ({users,AddUser,RemoveUser}) => {
    const [item,setItem] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(item !== ""){
            await AddUser({name:item});
            setItem("");
        }
        setItem("");
    }
    return (
        <center>
            <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Users" value={item} onChange={e => setItem(e.target.value)}/> <br />
                        <button type="submit"  className='add-btn'>
                        Add User 
                        </button> 
                    </form>
                    <br />
                    {users.map(user => {
                        return(
                            <div className="item"  >{user.name} 
                            <button className='del-btn' onClick={()=> RemoveUser(user.name)}  style={{"float": "right"}}>
                            Delete</button></div>
                        )
                    })}
                </div>
            </div>
        </center>
    )
}

const mapStateToProps = (state) =>({
    users: state
})

export default connect(mapStateToProps,{AddUser,RemoveUser})(Card);