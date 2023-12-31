import React from 'react';
import CardList from './CardList';
import { robots } from './Robots';
import SearchBox from './SearchBox';

const App = () => {
    return (
        <div>
        <h1>RoboFriends</h1>
        <SearchBox/>
        <CardList robots={robots} />
        </div>
    );
}

export default App;