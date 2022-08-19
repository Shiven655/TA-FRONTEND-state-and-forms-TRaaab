import React from 'react';

class MultiInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      date: '',
      readOnly: '',
      textarea: '',
    };
    this.fileInput = React.createRef();
  }
  handleChange = (event) => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="text">Text Input:</label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="date">Date Input</label>
          <input
            type="date"
            id="date"
            value={this.state.date}
            onChange={this.handleChange}
          ></input>
          <label htmlFor="file">File Input</label>
          <input type="file" ref={this.fileInput}></input>
          <label htmlFor="text">Read Only Input</label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleChange}
            placeholder="This can only be copied"
            readOnly="true"
          ></input>

          <label htmlFor="text">Disabled input</label>
          <input
            type="text"
            id="text"
            value={this.state.inputText}
            onChange={this.handleChange}
            disabled="true"
          ></input>
          <label htmlFor="text">TextArea</label>
          <textarea
            type="text"
            id="text"
            value={this.state.textarea}
            onChange={this.handleChange}
            rows="3"
          ></textarea>
          <textarea
            type="text"
            id="text"
            value={this.state.textarea}
            onChange={this.handleChange}
            rows="3"
            disabled="true"
          ></textarea>
          <input className="submit" type="submit" value="submit"></input>
        </form>
      </>
    );
  }
}
export default MultiInput;
