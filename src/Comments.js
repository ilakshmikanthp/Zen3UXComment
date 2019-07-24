import React, { Component } from 'react';
import Comment from './Comment';
class Comments extends Component {

    state = {
        userDetails : []
    }

    componentDidMount = () => {
        this.setState({
            userDetails : this.props.userDetails
        });
    }

    render() {
        const indUserDetail = this.props.userDetails.map( (ele, index) => 
            <Comment userDetail={ele} key={ele.login.uuid} isColapsed={index===0?true:false} colIndex={index}/>
        );
        return (
            <div>
                { indUserDetail }        
            </div>
        );
    }
}

export default Comments;