import React, { Component } from "react";
import PropTypes from "prop-types";

class ContactCard extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    <li>Mobile: {this.props.mobile}</li>
                    <li>Work: {this.props.work}</li>
                    <li>Email: {this.props.email}</li>
                </ul>
            </div>
        )
    }

}
ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    mobile: PropTypes.string.isRequired,
    work: PropTypes.string,
    Email: PropTypes.string.isRequired,
};

export default ContactCard;