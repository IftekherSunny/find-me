import App                  from './App';
import React                from 'react';
import ReactDOM             from 'react-dom';
import { store }            from './stores/information';
import { Provider }         from 'react-redux';
import EmbededFormPreview   from './components/EmbededFormPreview';

// Added stylesheet
require('./App.css');

// Rendering jsx when root element is found
if( document.getElementById('root') !== null) {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}


// Rendering jsx when embeded-preview element is found
if( document.getElementById('embeded-preview') !== null) {
    ReactDOM.render(
        <Provider store={store}><EmbededFormPreview /></Provider>,
        document.getElementById('embeded-preview')
    );
}
