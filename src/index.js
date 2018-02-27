import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';
import Time from './time.js';


const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <FileListItem key={file.id} file={file} />
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array
};

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <td><FileIcon file={file} key={0} /></td>
    <td><FileName file={file} key={1} /></td>
    <td><CommitMessage message={file.commit_message} /></td>
    <td><Time time={file.updated_at} /></td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const CommitMessage = ({ message }) => (
    <span className="commit-message">
      {message}
    </span>
);
CommitMessage.propTypes = {
  message: PropTypes.string.isRequired
};

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder')
    icon = 'fa-folder';

  return (
    <span className="file-icon">
      <i className={`fa ${icon}`} />
    </span>
  );
};
FileIcon.propTypes = {
  file: PropTypes.object.isRequred
};

function FileName({ file }) {
  return (
    <span className="file-name">
      {file.name}
    </span>
  );
};

const testFiles = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    updated_at: "2018-02-27 14:13:00",
    commit_message: 'Initial commit'
  },
  {
    id: '2',
    name: 'tests',
    type: 'folder',
    updated_at: "2018-02-27 14:13:00",
    commit_message: 'Initial commit'
  },
  {
    id: '3',
    name: 'README',
    type: 'file',
    updated_at: "2018-02-27 14:13:00",
    commit_message: 'Added a readme'
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
