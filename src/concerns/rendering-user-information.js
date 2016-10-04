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

            { user.socialFields.map( (value, index) => {
                return <div key={index}>{ user.fields[value.target] + ":" + user.socials[value.target]} <br /></div>
            })}

            Mobile: { user.mobileNo }  <br />
            Email: { user.email }  <br />
        </div>
    )
}