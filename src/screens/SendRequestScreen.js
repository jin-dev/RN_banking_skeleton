import React, {useState} from 'react';
import NumberPAd from '../components/NumberPad';
import styled from 'styled-components';
import Text from '../components/Text';

const SendRequestScreen = () => {
    const [amount, setAmount] = useState("0");

    const convertToDollars = (currentAmount) => {
        const newAmount = currentAmount / 100;
        return newAmount.toLocaleString("en-US", { style: "currency", currency: "USD"});
    };

    const preeKey = (item, index) => {
        setAmount((prev) => {
            return index != 10 ? prev + item : prev.slice(0, prev.length - 1);
        });
    };


    return (
        <Container>
            <Text center large heavy margin="16px 0 0 0">
                Send
            </Text>

            <Amount>
                <Text title heavy>
                    {convertToDollars(amount)}
                </Text>
            </Amount>
        </Container>
        
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`

const Amount = styled.View`
`;

const User = styled.View``;

const ProfilePhoto = styled.Image``;

const UserDetails = styled.View``;

const Send = styled.TouchableOpacity``;

const StatusBar = styled.StatusBar``;

export default SendRequestScreen;