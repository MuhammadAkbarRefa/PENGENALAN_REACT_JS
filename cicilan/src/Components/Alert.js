import React, {Component} from 'react';

class Alert extends Component {
    render(){
        return(
        <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>{this.props.hasil}</strong>
            <button type="button" data-dismiss="alert">
                <span aria-hidden="true">&times;</span>
            </button>
		</div>
        );
    }
}

export default Alert;