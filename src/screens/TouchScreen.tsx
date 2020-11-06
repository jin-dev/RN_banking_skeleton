import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TouchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>My TouchScreen </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default TouchScreen;