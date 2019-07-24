import React, { Component } from 'react';

class Comment extends Component {
    btnAddComClicked = (event) => {
        alert("Comment Posted");
    }
    render() {
        const data = this.props.userDetail;
        console.log(this.props.isColapsed);
        let dayDiff = Math.floor((Math.random() * 10) + 1);
        const commentShow = this.props.isColapsed ? "collapse show" : "collapse";
        const collapseIndex = "collapse" + this.props.colIndex;
        const collapseTarget = "#collapse" + this.props.colIndex;

        return (
            <div className="card text-center marginb">
                <div className="container">
                    <div className="card-header row">
                        <div className="form-group col-sm-6">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Team Comment</option>
                                <option>Public Comment</option>
                            </select>
                        </div>
                        <div className="col-sm-2"><label>Notify:</label></div>
                        <div className="form-group col-sm-4">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>None</option>
                                <option>1 Hour</option>
                                <option>1 Day</option>
                            </select>
                        </div>
                    </div>
                    <div className="card-body collapsed card-block container" data-toggle="collapse" data-target={collapseTarget} aria-expanded="false" aria-controls={collapseIndex}>
                        <div className="row">
                            <div className="avatar-root col-sm-2">{data.name.first[0].toUpperCase() + data.name.last[0].toUpperCase()}</div>
                            <div className="col-sm-10">
                                <h5 className="card-title pull-left">
                                    {data.name.first + ' ' + data.name.last} </h5>
                                <p className="card-text pull-left">Street Location - {data.location.street}</p>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-2" />
                            <div className="col-sm-10 pull-left"><p className='text-muted' > {dayDiff} days ago</p></div>
                        </div>
                    </div>
                    <div id={collapseIndex} className={commentShow} aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What's your Response ?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mb-2" onClick={this.btnAddComClicked}>Add Comment</button>
                        </div>
                    </div>
                    <div className="card-footer text-muted row">
                        <div className="form-group col-sm-6">
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>None</option>
                                <option>1 Hour</option>
                                <option>1 Day</option>
                            </select>
                        </div>
                        <div className="form-group col-sm-6">
                            <div className="form-check pull-right">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                                <label className="form-check-label label-resolve">
                                    Resolve
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;