import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(_error, _info) {
        this.setState({hasError: true});
    }

  render() {
      const { hasError } = this.state;
      return hasError ? <h1>Error Occured...Try Again Later</h1>
      : (
      <div>{this.props.children}</div>
    )
  }
}

export default ErrorBoundary