import Profile from './profile';
import Statistics from './statistics';

import user from 'data/user.json';
import data from 'data/data.json';

import { Global, css } from '@emotion/react';

export const App = () => {
  return (
    <div>
      <Global
        styles={css`
          body {
            background-color: #242424;
            color: #fff;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
          p {
            margin: 0;
          }
        `}
      />
      {
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      }
      {<Statistics title={'Upload'} stats={data} />}
    </div>
  );
};
