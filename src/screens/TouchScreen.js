import React from 'react';
import styled from 'styled-components';
import { View, StyleSheet } from 'react-native';

import Text from '../components/Text';


const TouchScreen = () => {
    return (
        <Container>
            <Text center heavy title margin="32px 0 0 0"> The Bank </Text>

            <Touch>
                <Circle bgColor="#5196F430"></Circle>
            </Touch>
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

export default TouchScreen;