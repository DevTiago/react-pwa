import React from 'react';
import firebase from '../firebase';
import axios from 'axios';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            authUser: null,
            authUserToken: null,
            show: true
        };
    }

    componentDidMount() {
    }

    sendAuthorizationToken = async () => {
        const messaging = firebase.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();

        axios.post('https://pwa-laravel-app.herokuapp.com/api/set-notification-token', {
            token: token,
            user: this.state.authUser
        })
            .then(console.log('O token foi guardado!' + token))
            .catch(err => alert('Please fill your name first!'))

    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {

        return (
            <div className="d-flex flex-column">
                <label>
                    Please type your name:
                <input type="text" name="authUser" value={this.state.value} onChange={this.handleChange} />
                </label>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Push Notifications Authorization
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title  text-dark" id="exampleModalLabel">Push Notifications</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body text-dark">
                                Upgrade Agency wants to send you Push Notifications!
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">No, thanks</button>
                                <button type="button" className="btn btn-primary" onClick={this.sendAuthorizationToken}>Yes please!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Root;
