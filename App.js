import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
const [people, setPeople] = useState([
{ name: 'Niha', key: '1' },
{ name: 'Sumaiya', key: '2' },
{ name: 'Talha', key: '3' },
{ name: 'p', key: '4' },
{ name: 'K', key: '5' },
{ name: 'H', key: '6' },
{ name: 'J', key: '7' },
{ name: 'L', key: '8' },

]);
return (
<View style={styles.container}>
<FlatList
numColumns={2}
keyExtractor={(item) => item.id}
data={people}
renderItem={({ item }) => (
<Text style={styles.item}>­{item.name}</Text>

)}
/>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
},
item: {
padding: 10,
fontSize: 18,
height: 44,
},
})