import React                from 'react';
import Text                 from './fields/Text';
import { connect }          from 'react-redux';
import {
    mapStateToProps,
    mapDispatchToProps }    from './../stores/information';

/**
 * Create a new form component
 */
class Form extends React.Component
{
    /**
     * Render jsx
     *
     * @return {XML}
     */
    render() {

        const { changedIntro, changedFacebookUsername, changedTwitterUsername,
                changedMobileNo, changedEmail, user, showEmbededCode
              } = this.props;

        return (
            <div className="col-md-6">
                <textarea className="form-control" placeholder="Your intro" onChange={changedIntro} rows="6"></textarea>

                <h2>Channels</h2>

                <h4>Social</h4>

                <Text placeholder="Facebook Username" icon="envelope" onChange={changedFacebookUsername}/>

                <Text placeholder="Twitter Username" icon="envelope" onChange={changedTwitterUsername} />

                <h4>Classic</h4>

                <Text placeholder="Phone" icon="earphone" onChange={changedMobileNo} />

                <Text placeholder="Mail" icon="envelope" onChange={changedEmail} />

                {(user.showEmbededCode)?
                    <textarea className="form-control" placeholder="Show embed code" onChange={()=>{}} value={user.embededCode} rows="8"></textarea>
                    : null
                }

                <input type="button" className="btn btn-primary" value="Show Embed Code" onClick={showEmbededCode}/>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);