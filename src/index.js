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
    {getFileName(file)}
    <CommitMessage message={file.commit_message} />
    <td className="updated-at">
      <Time time={file.updated_at}/>
    </td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const CommitMessage = ({ message }) => (
  <td className="commit-message">
    {message}
  </td>
);
CommitMessage.propTypes = {
  message: PropTypes.object.isRequired
};

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if (file.type === 'folder')
    icon = 'fa-folder';

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  );
};
FileIcon.propTypes = {
  file: PropTypes.object.isRequred
};

function getFileName(file) {
  return [
    <FileIcon file={file} key={0}/>,
    <td className="file-name" key={1}>{file.name}</td>
  ];
}

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
