import React from 'react'
import {connect} from 'react-redux';
import './Style.css'

const Badge = ({users}) => {
    return (
        <div style={{"margin":"80px 0px 10px 0px"}}>
            <center>
            <button type="button" className='count-btn'>
            Total users &nbsp;
            <span className='count'>
                 {users.length}
            </span>
            </button>
            </center>
        </div>
    )
}
const mapStateToProps = state => ({
    users : state
})
export default connect(mapStateToProps)(Badge);