import React, { Component } from 'react';
import { firebase } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';
import { CircularProgress } from '@material-ui/core';

export default class Fileuploader extends Component {
  state = {
    name: '',
    isUploading: false,
    fileURL: ''
  };

  handleUploadStart = () => this.setState({ isUploading: true });

  handleUploadError = () => this.setState({ isUploading: false });

  handleUploadSuccess = filename => {
    this.setState({
      name: filename,
      isUploading: false
    });

    firebase
      .storage()
      .ref(this.props.dir)
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ fileURL: url }));

    this.props.filename(filename);
  };

  uploadAgain = () => {
    this.setState({
      name: '',
      isUploading: false,
      fileURL: ''
    });
    this.props.resetImage();
  };

  static getDerivedStateFromProps(props, state) {
    if (props.defaultImg) {
      return (state = {
        name: props.defaultImgName,
        fileURL: props.defaultImg
      });
    }
    return null;
  }

  render() {
    return (
      <div>
        {!this.state.fileURL ? (
          <div>
            <div className="label_inputs">{this.props.tag}</div>
            <FileUploader
              accept="image/*"
              name="image"
              randomizeFilename
              storageRef={firebase.storage().ref(this.props.dir)}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
            />
          </div>
        ) : (
          <div className="image_upload_container">
            <img
              style={{ width: '100%' }}
              src={this.state.fileURL}
              alt={this.state.filename}
            />
            <div className="remove" onClick={() => this.uploadAgain()}>
              Remove
            </div>
          </div>
        )}

        {this.state.isUploading ? (
          <div
            className="progress"
            style={{ textAlign: 'center', margin: '30px' }}
          >
            <CircularProgress style={{ color: '#98c6e9' }} thickness={5} />
          </div>
        ) : null}
      </div>
    );
  }
}
