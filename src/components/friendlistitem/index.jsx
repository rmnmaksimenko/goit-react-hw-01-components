import { Item, Name, Avatar, Status } from './friendlistitem.styled.jsx';
import PropTypes from 'prop-types';

const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;
  return (
    <Item>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendListItem;
