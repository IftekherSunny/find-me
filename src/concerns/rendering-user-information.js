import React from 'react';

/**
 * concerns about user information rendering
 *
 * @param object user
 */
export default ({ user }) =>
{
    return (
        <div>
            About Me: { user.message } <br />

            Facebook: { user.facebookUsername }  <br />
            Twitter: { user.twitterUsername }  <br />

            Mobile: { user.mobileNo }  <br />
            Email: { user.email }  <br />
        </div>
    )
}