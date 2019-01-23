import React from "react";
import Counter from './Counter';
import store from '../store/index';
import { Provider } from 'react-redux';

class Home extends React.Component {
    render()
    {
        return (
            <div>
                <h1>Home Page</h1>
                <Provider store={store}>
                    <Counter />
                </Provider>
            </div>
        )
    }
}
export default Home;