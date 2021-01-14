import axios from "axios";
import { Component } from "react";
import React from "react";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.handleFile = this.handleFile.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleFile(e) {
    let file = e.target.files[0];

    this.setState({ file: file });
  }

  handleUpload(e) {
    e.preventDefault();

    let formdata = new FormData();

    formdata.append("image", this.state.file);
    formdata.append("name", "toto");

    console.log(this.state.file);

    console.log(formdata);
    axios({
      url: "http://localhost:5000/city/1/upload",
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGRldi5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTYxMDYxMzIzNywiZXhwIjoxNjEwNjQ1NjM3fQ.kP6NBZzF-JyUfxxwZZPC1cn3bQG_UREz1lFmG8XBqCk",
      },

      data: formdata,
    }).then(
      (res) => {
        console.log(res.data);
      },
      (err) => {}
    );
  }

  render() {
    return (
      <div>
        <form
          id="uploadForm"
          onSubmit={this.handleUpload}
          encType="multipart/form-data"
        >
          <div>
            <label>SELECT FILE</label>
            <input type="file" name="files" onChange={this.handleFile} />
            <button type="submit">UPLOAD</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Upload;
