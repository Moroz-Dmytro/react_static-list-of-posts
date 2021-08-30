import React from 'react';

import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  const { name, email } = user;

  return (
    <div className="post__user-info">
      <h2>User:</h2>
      <div>
        {` Name: ${name} `}
      </div>
      <div>
        {` Email: ${email} `}
      </div>
    </div>
  );
};