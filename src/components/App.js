import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import friends from '../data/friends.json';
import statistics from '../data/statistics.json';
import transaction from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <h1>goit-react-hw-01-components</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={statistics} />
      <FriendList friends={friends} />
      <TransactionHistory items={transaction} />
    </>
  );
};
