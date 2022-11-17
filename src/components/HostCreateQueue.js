import React, { Component } from 'react';

export default class HostCreateQueue extends Component {
    render() {
        return (
            <div className="container bg-light  mt-4 p-4">
                <div className= "row" >
                    <div className="container card mt-4 p-4">
                        <div className="text-center">
                            <h2>Create New Queue</h2>
                        </div>
                        <div className="card-body">
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Select Location</span>
                                </div>
                                <input type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                            </div>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text" id="inputGroup-sizing-default">Estimated Waiting Time per Person</span>
                                </div>
                                <input type="number" class="form-control" min="0" aria-label="Default" aria-describedby="inputGroup-sizing-default"></input>
                            </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div  class="text-center">
                                        <button type="submit" class="btn btn-primary mr-5">Create Queue</button>
                                        <button type="submit" class="btn btn-danger mr-5">Delete Queue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}