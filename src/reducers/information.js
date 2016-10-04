import Base64   from 'base-64';
import Action   from './../actions/information';

/**
 * Information default state
 *
 * @type {{message: string, facebookUsername: string, twitterUsername: string, mobileNo: string, email: string, embededCode: string, base64Code: *, showEmbededCode: boolean}}
 */
const defaultState = {
    message: '',
    socials: {
        facebookUsername: '',
        twitterUsername: ''
    },
    mobileNo: '',
    email: '',
    embededCode: '',
    base64Code: Base64.encode(JSON.stringify({})),
    showEmbededCode: false,
    fields: {
        facebookUsername: 'Facebook',
        twitterUsername: 'Twitter'
    },
    socialFields: [
        {target: 'facebookUsername'},
        {target: 'twitterUsername'}
    ]
}


/**
 * User information reducer
 */
export default function information (state = defaultState, action = {}) {
    switch(action.type) {
        case Action.INTRO_CHANGED:
            return Object.assign({}, state, { message: action.payload.message });

        case Action.FACEBOOK_USERNAME_CHANGED:
            return Object.assign({}, state, { socials: {
                    facebookUsername: action.payload.username,
                    twitterUsername: state.socials.twitterUsername,
                    googleUsername: state.socials.googleUsername
                }
            });

        case Action.TWITTER_USERNAME_CHANGED:
            return Object.assign({}, state, { socials: {
                    facebookUsername: state.socials.facebookUsername,
                    twitterUsername: action.payload.username,
                    googleUsername: state.socials.googleUsername
                }
            });

        case Action.GOOGLE_USERNAME_CHANGED:
            return Object.assign({}, state, { socials: {
                facebookUsername: state.socials.facebookUsername,
                twitterUsername: state.socials.twitterUsername,
                googleUsername: action.payload.username
            }
            });

        case Action.MOBILE_NO_CHANGED:
            return Object.assign({}, state, { mobileNo: action.payload.mobileNo });

        case Action.EMAIL_CHANGED:
            return Object.assign({}, state, { email: action.payload.email });

        case Action.SHOW_EMBEDED_CODE:
            const embed = getStateWithEmbededCode(state);

            return Object.assign({}, state, embed);

        case Action.SOCIAL_FIELDS_CHANGED:
            return Object.assign({}, state, { socialFields: action.payload.socials});

        case Action.ADDED_NEW_SOCIAL:
            let socialFields = state.socialFields;
            socialFields.push(action.payload.social);

            let socials = state.socials;
            socials[action.payload.social.target] = '';

            return Object.assign({}, state, { socialFields: socialFields, socials: socials });

        case Action.ADDED_NEW_FIELD:
            let fields = state.fields;

            fields[action.payload.social.target] = action.payload.social.label;

            return Object.assign({}, state, { fields: fields });

        default:
            return state;
    }
}

/**
 * Get user information state with embeded code.
 *
 * @param object state
 * @return {*}
 */
function getStateWithEmbededCode(state) {
    state.base64Code = Base64.encode(JSON.stringify({
        message:  state.message,
        socials: state.socials,
        mobileNo: state.mobileNo,
        email: state.email,
        fields: state.fields,
        socialFields: state.socialFields
    }));

    state.embededCode = 'http://localhost:3000/embed.html?data=' + state.base64Code;

    state.showEmbededCode = true;

    return state;
}