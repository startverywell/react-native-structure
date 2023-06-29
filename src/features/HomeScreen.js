import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


 const HomeScreen = () => {
	const [count, setCount] = useState(0);
	const [text, setText] = useState('');

	return (
		<View style={styles.container}>
			<Text>You clicked {count} times</Text>
			<Button
				onPress={()=> setCount(count+1)}
				title='Click me!'
			/>
			<Text style={{padding: 10, fontSize: 42}}>
				{
					text.split(' ').map(word=> word && '🍕').join('')
				}
			</Text>
			<TextInput
				style={{height: 40}}
				placeholder='Type here to translate!'
				onChangeText={newText => setText(newText)}
				defaultValue={text}
			/>
			<StatusBar style="auto" />
		</View>
	);
}
export default HomeScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
