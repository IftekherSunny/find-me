import Base64   from 'base-64';
import Action   from './../actions/information';

/**
 * Information default state
 *
 * @type {{message: string, facebookUsername: string, twitterUsername: string, mobileNo: string, email: string, embededCode: string, base64Code: *, showEmbededCode: boolean}}
 */
const defaultState = {
    message: '',
    facebookUsername: '',
    twitterUsername: '',
    mobileNo: '',
    email: '',
    embededCode: '',
    base64Code: Base64.encode(JSON.stringify({})),
    showEmbededCode: false
}


/**
 * User information reducer
 */
export default function information (state = defaultState, action = {}) {
    switch(action.type) {
        case Action.INTRO_CHANGED:
            return Object.assign({}, state, { message: action.payload.message });

        case Action.FACEBOOK_USERNAME_CHANGED:
            return Object.assign({}, state, { facebookUsername: action.payload.username });

        case Action.TWITTER_USERNAME_CHANGED:
            return Object.assign({}, state, { twitterUsername: action.payload.username });

        case Action.MOBILE_NO_CHANGED:
            return Object.assign({}, state, { mobileNo: action.payload.mobileNo });

        case Action.EMAIL_CHANGED:
            return Object.assign({}, state, { email: action.payload.email });

        case Action.SHOW_EMBEDED_CODE:
            const embed = getStateWithEmbededCode(state);

            return Object.assign({}, state, embed);

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
        facebookUsername: state.facebookUsername,
        twitterUsername: state.twitterUsername,
        mobileNo: state.mobileNo,
        email: state.email
    }));

    state.embededCode = 'http://localhost:3000/embed.html?data=' + state.base64Code;

    state.showEmbededCode = true;

    return state;
}