import React from 'react';

import { doSignOut } from '../datasource/FirebaseAuth';

export const SignOutButton = () => (
  <button type="button" onClick={doSignOut}>
    Sign Out
  </button>
);

export default SignOutButton;
