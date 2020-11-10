import React from 'react';
import styled from 'styled-components';
import { View, StyleSheet } from 'react-native';


//Working in the Expo condition
//import { Fontisto, MaterialIcons } from "@expo/vector-icons";

//------------------//
//Circle 에 지문 icon needed
//PinAccess 에 Locker icon needed
//------------------//

import Text from '../components/Text';


const TouchScreen = ({ navigation }) => {
    return (
        <Container>
            <Text center heavy title margin="32px 0 0 0"> The Bank </Text>

            <Touch onLongPress={() => navigation.navigate("Tabs")} delayPressIn={0}>
                <Circle bgColor="#5196F405">
                    <Circle bgColor="#5196F410">
                        <Circle bgColor="#5196F430">
                        </Circle>
                    </Circle>
                </Circle>
            </Touch>

            <Text center heavy large> Touch ID sensor for access to your myBank account </Text>
            <Text center bold margin="16px 0 0 0" color="#9c9c9f"> Please very your identify using Touch ID </Text>

           <PinAccess onPress={() =>  navigation.navigate("Pin")} delayPressIn={0}>
               
                <Text bold margin="0 0 0 8px" color="#964ff0"> Enter Access Pin</Text>

           </PinAccess>
        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const Touch = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const Circle = styled.View`
    background-color: ${(props) => props.bgColor};
    padding: 32px;
    border-radius: 999px;
`;

const PinAccess = styled.TouchableOpacity`
    margin-top: 16px;
    padding: 32px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export default TouchScreen;