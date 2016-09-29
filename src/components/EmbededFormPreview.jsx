import React             from 'react';
import Base64            from 'base-64';
import QueryString       from 'query-string';
import { connect }       from 'react-redux';
import UserInformation   from './../concerns/rendering-user-information';
import {
    mapStateToProps,
    mapDispatchToProps } from './../stores/information';

/**
 * Create a new embeded form preview component
 */
class EmbededFormPreview extends React.Component
{
    /**
     * Render jsx
     *
     * @return {XML}
     */
    render() {

        const base64Code = QueryString.parse(location.search).data;

        const user = JSON.parse(Base64.decode(base64Code));

        return (
            <div className="col-md-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Find Me
                    </div>

                    <div className="panel-body">
                        <UserInformation user={user}></UserInformation>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EmbededFormPreview);