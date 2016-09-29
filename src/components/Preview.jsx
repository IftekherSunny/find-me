import React             from 'react';
import { connect }       from 'react-redux';
import UserInformation   from './../concerns/rendering-user-information';
import {
    mapStateToProps,
    mapDispatchToProps } from './../stores/information';

/**
 * Create a new preview component
 */
class Preview extends React.Component
{
    /**
     * Render jsx
     *
     * @return {XML}
     */
    render() {

        const { user } = this.props;

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


export default connect(mapStateToProps, mapDispatchToProps)(Preview);