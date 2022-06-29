import PropTypes from 'prop-types';
import {
  FriendListBlock,
  FriendlistMarkup,
  Item,
  Name,
  Avatar,
  Status,
  Title,
} from './friendlist.styled';

const FriendList = ({ friends }) => {
  const friendsMarkup = friends.map(friend => {
    return (
      <Item key={friend.id}>
        <Status isOnline={friend.isOnline}></Status>
        <Avatar src={friend.avatar} alt={friend.name} width="48" />
        <Name>{friend.name}</Name>
      </Item>
    );
  });
  return (
    <FriendListBlock>
      <Title>Friend list</Title>
      <FriendlistMarkup>{friendsMarkup}</FriendlistMarkup>
    </FriendListBlock>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default FriendList;
