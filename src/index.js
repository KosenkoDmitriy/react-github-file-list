import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';


const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file => (
        <tr className="file-list-item" key={file.id}>
          <td className="file-name">{file.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
FileList.propTypes = {
  files: PropTypes.array
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
