import Form         from './components/Form';
import React        from 'react';
import Preview      from './components/Preview';
import { store }    from './stores/information';
import { Provider } from 'react-redux';

/**
 * Create a new app component
 */
class App extends React.Component
{
    /**
     * Render jsx
     *
     * @return {XML}
     */
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Form />
                    <Preview />
                </div>
            </Provider>
        )
    }
}


export default App;