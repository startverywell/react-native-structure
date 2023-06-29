import React, {useState, useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { StatusBar } from 'react-native';

const App = () => {
	return(
		<>
			{/* <StatusBar hidden={true}/> */}
			<AppNavigator/>
		</>
		
	)
}

export default App;