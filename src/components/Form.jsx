import React                    from 'react';
import Text                     from './fields/Text';
import update                   from 'react/lib/update';
import { connect }              from 'react-redux';
import { mapStateToProps,
        mapDispatchToProps }    from './../stores/information';

/**
 * Create a new form component
 */
class Form extends React.Component
{
    constructor() {
        super();

        this.moveSocialField = this.moveSocialField.bind(this);
    }

    /**
     * Set socials data with component state
     */
    componentWillMount() {
        this.setState({
            socials: [
                { placeholder: 'Facebook Username', icon: 'envelope', target: 'facebookUsername', onChange: this.props.changedFacebookUsername },
                { placeholder: 'Twitter Username', icon: 'envelope',  target: 'twitterUsername', onChange: this.props.changedTwitterUsername}
            ]
        })
    }

    /**
     * Render jsx
     *
     * @return {XML}
     */
    render() {

        const { changedIntro, changedMobileNo, changedEmail,
                user, showEmbededCode } = this.props;
console.log(user)
        return (
            <div className="col-md-6">
                <textarea className="form-control" placeholder="Your intro" onChange={changedIntro} rows="6"></textarea>

                <h2>Channels</h2>

                <h4>Social</h4>

                { this.state.socials.map( (social, index) => {
                    return  <Text key={index} moveSocialField={this.moveSocialField} value={user.socials[social.target]} target={social.target} index={index} onChange={social.onChange} placeholder={social.placeholder} icon={social.icon} />
                }) }

                <h4>Classic</h4>

                <Text icon="earphone" onChange={changedMobileNo} />

                <Text icon="envelope" onChange={changedEmail} />

                {(user.showEmbededCode)?
                    <textarea className="form-control" placeholder="Show embed code" onChange={()=>{}} value={user.embededCode} rows="8"></textarea>
                    : null
                    }

                <h4>Others</h4>
                <div className="row">
                    <div className="col-md-4">
                        <span className="btn btn-danger btn-block" onClick={this.addSocial.bind(this,
                            'Google Username', 'envelope', 'googleUsername', this.props.changedGoogleUsername, 'Google'
                        )}>
                            Google+
                        </span>
                    </div>
                </div>

                <input type="button" className="btn btn-primary" value="Show Embed Code" onClick={showEmbededCode.bind(this, this.state.socials)}/>
            </div>
        )
    }

    /**
     * Move social field.
     *
     * @param dragIndex
     * @param hoverIndex
     */
    moveSocialField(dragIndex, hoverIndex) {
        let dragCard = this.state.socials[dragIndex];

        this.setState(update(this.state, {
            socials: {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard]
                ]
            }
        }));

        this.props.socialFieldsChanged(this.state.socials)
    }

    /**
     * Add new social item
     *
     * @param placeholder
     * @param icon
     * @param target
     * @param onChange
     * @param label
     */
    addSocial(placeholder, icon, target, onChange, label) {
        let social = {placeholder, icon, target, onChange, label};

        let socials = this.state.socials;
        socials.push(social);

        this.setState({ socials });

        this.props.addedNewSocialField(social);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Form);