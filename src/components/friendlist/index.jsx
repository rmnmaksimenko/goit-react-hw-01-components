import PropTypes from 'prop-types';
import { FriendListBlock, FriendlistMarkup, Title } from './friendlist.styled';
import FriendListItem from 'components/friendlistitem';

const FriendList = ({ friends }) => {
  return (
    <FriendListBlock>
      <Title>Friend list</Title>
      <FriendlistMarkup>
        {friends.map(friend => {
          return <FriendListItem key={friend.id} friend={friend} />;
        })}
      </FriendlistMarkup>
    </FriendListBlock>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
