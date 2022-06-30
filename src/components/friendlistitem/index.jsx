import { Item, Name, Avatar, Status } from './friendlistitem.styled.jsx';

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

export default FriendListItem;
