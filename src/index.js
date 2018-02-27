import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment'; // yarn add moment
import PropTypes from 'prop-types';


function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <NameWithNick author={tweet.author}/>
        <Time dateTime={tweet.timestamp}/>
        <Message text={tweet.msg}/>
        <div className="buttons">
          <ReplyBtn/>
          <RetweetBtn count={tweet.retweets}/>
          <LikeBtn count={tweet.likes}/>
          <MoreOptionsBtn/>
        </div>
      </div>
    </div>
  );
}

var testTweet = {
    msg: "Message ... ",
    gravatar: "qwer", // https://daveceddia.com/gravatar
    author: {
      nick: "bondPerson",
      name: "Bond"
    },
    likes: 55,
    retweets: 1001,
    timestamp: "2018-02-24 21:21:21"
}

function Avatar({ hash }) {
  var url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar"
    />
  );
}

function Message({ text }) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function NameWithNick({ author }) {
  const {name, nick} = author;
  return (
    <span className="name-with-nick">
      <span className="name">{name}</span>
      <span className="nick">@{nick}</span>
    </span>
  );
}
NameWithNick.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired
  }).isRequired
};

const Time = ({ dateTime }) => {
  const timeString = moment(dateTime).fromNow();
  return (
    <span className="time"> {timeString} </span>
  );
}
Time.propTypes = { dateTime: PropTypes.string };

const ReplyBtn = () => (
  <i className="fa fa-reply reply-button"/>
);

function Count({ count }) {
    if (count > 0) {
      return (
        <span className="retweet-count">
          {count}
        </span>
      );
    } else {
      return null;
    }
}

const RetweetBtn = ({ count }) => (
  <span className="retweet-button">
    <i className="fa fa-retweet"/>
    <Count count={count} />
  </span>
);
RetweetBtn.propTypes = {
  count: PropTypes.number
};


const LikeBtn = ( { count }) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
      <span className="like-count">
        {count ? count : null}
      </span>
  </span>
);

LikeBtn.propTypes = {
  count: PropTypes.number
};

const MoreOptionsBtn = () => (
  <i className="fa fa-ellipsis-h more-button"/>
);

ReactDOM.render(
  <div>
    <Tweet tweet={testTweet}/>
  </div>,
  document.querySelector('#root')
);
