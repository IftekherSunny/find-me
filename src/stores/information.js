import Action           from './../actions/information';
import information      from './../reducers/information';
import { createStore }  from 'redux';

/**
 * User information store
 */
export const store = createStore(information);


/**
 * Mapping user informaiton store's state to props
 *
 * @param state
 * @return {{user: *}}
 */
export const mapStateToProps = (state) => {
    return {
        user: store.getState(),
        getValue: (target) => {
            if(target === 'facebookUsername')
                return store.getState().socials.facebookUsername

            if(target === 'twitterUsername')
                return store.getState().socials.twitterUsername
        }
    }
}


/**
 * Mapping user information store's dispatch to props
 *
 * @param dispatch
 * @return {{changedIntro: Function, changedFacebookUsername: Function, changedTwitterUsername: Function, changedMobileNo: Function, changedEmail: Function, showEmbededCode: Function}}
 */
export const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * Dispatching uesr intro changed
         *
         * @param event
         */
        changedIntro: (event) => {
            dispatch({
                type: Action.INTRO_CHANGED,
                payload: {
                    message: event.target.value
                }
            })
        },

        /**
         * Dispatching user facebook username changed
         *
         * @param event
         */
        changedFacebookUsername: (event) => {
            dispatch({
                type: Action.FACEBOOK_USERNAME_CHANGED,
                payload: {
                    username: event.target.value
                }
            })
        },

        /**
         * Dispatching twitter username changed
         *
         * @param event
         */
        changedTwitterUsername: (event) => {
            dispatch({
                type: Action.TWITTER_USERNAME_CHANGED,
                payload: {
                    username: event.target.value
                }
            })
        },

        /**
         * Dispatching google username changed
         *
         * @param event
         */
        changedGoogleUsername: (event) => {
            dispatch({
                type: Action.GOOGLE_USERNAME_CHANGED,
                payload: {
                    username: event.target.value
                }
            })
        },

        /**
         * Dispatching mobile no changed
         *
         * @param event
         */
        changedMobileNo: (event) => {
            dispatch({
                type: Action.MOBILE_NO_CHANGED,
                payload: {
                    mobileNo: event.target.value
                }
            })
        },

        /**
         * Dispatching email changed
         *
         * @param event
         */
        changedEmail: (event) => {
            dispatch({
                type: Action.EMAIL_CHANGED,
                payload: {
                    email: event.target.value
                }
            })
        },

        /**
         * Dispatching show embeded code
         */
        showEmbededCode: (socials) => {
            dispatch({
                type: Action.SHOW_EMBEDED_CODE,
                payload: {
                    socials: socials
                }
            })
        },

        /**
         * Dispatching social fields changed
         */
        socialFieldsChanged: (socials) => {
            dispatch({
                type: Action.SOCIAL_FIELDS_CHANGED,
                payload: {
                    socials: socials
                }
            })
        },

        /**
         * Dispatch new social field
         *
         * @param social
         */
        addedNewSocialField: (social) => {
            dispatch({
                type: Action.ADDED_NEW_SOCIAL,
                payload: {
                    social: social
                }
            })

            dispatch({
                type: Action.ADDED_NEW_FIELD,
                payload: {
                    social: social
                }
            })
        }
    }
}