import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './profile.styled';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;
  return (
    <ProfileCard>
      <Description>
        <Avatar src={avatar} alt={username} width="120px" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <li>
          <Label>followers</Label>
          <Quantity>{followers}</Quantity>
        </li>
        <li>
          <Label>views</Label>
          <Quantity>{views}</Quantity>
        </li>
        <li>
          <Label>likes</Label>
          <Quantity>{likes}</Quantity>
        </li>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
