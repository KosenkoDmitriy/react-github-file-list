import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

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
  <tr className="file-list-item" key={file.id}>
    <td className="file-name">{file.name}</td>
  </tr>
);
FileListItem.propTypes = {
  file: PropTypes.object.isRequired
};

const testFiles = [
  {
    id: '1',
    name: 'src',
    type: 'folder',
    updated_at: "2018-02-27 14:13:00",
    commitMessage: 'Initial commit'
  },
  {
    id: '2',
    name: 'tests',
    type: 'folder',
    updated_at: "2018-02-27 14:13:00",
    commitMessage: 'Initial commit'
  },
  {
    id: '3',
    name: 'README',
    type: 'file',
    updated_at: "2018-02-27 14:13:00",
    commitMessage: 'Added a readme'
  },
];

ReactDOM.render(
  <FileList files={testFiles} />,
  document.querySelector("#root")
);
