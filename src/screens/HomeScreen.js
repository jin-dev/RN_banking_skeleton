import React from 'react';
import { View, Dimensions } from 'react-native';
import Text from '../components/Text';
import styled from 'styled-components';
import PurchaseData from "../../purchases";
import purchases from '../../purchases';

import { LineChart } from 'react-native-chart-kit';

const HomeScreen = () => {
    
  

    const renderPurchase = ({item}) => (
      <Purchase>
            <PurchaseInfo>
                <Text heavy>{item.product}</Text>
                <Text bold margin="2px 0 2px 0">
                    {item.store}
                </Text>
                <Text small color="#727479">
                    {item.address}
                </Text>
            </PurchaseInfo>
            <Text heavy>{item.price}</Text>
        </Purchase>
    );
    
    return (
        <Container>
            <Header>
                <ProfilePhoto source={require('../assets/images/test.png')} />
                <Welcome>
                    <Text heavy medium>Welcome, </Text>
                    <Text>Jin</Text>    
                </Welcome>    
                <Text> Options</Text>
            </Header> 

            <Text center title black>
                $9,999,999,000
            </Text>
            <Text center black color="#727479">
                Current Balance
            </Text>

            <Chart>
                <LineChart 
                 data={{
                    labels: ["May", "June", "July", "Aug", "Sept", "Oct"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                                Math.random() * 10,
                            ],
                        },
                    ],
                }}
                    width={Dimensions.get("window").width}
                    height={250}
                    xAxisLabel="$"
                    yAxisSuffix="k"
                    chartConfig={{
                        backgroundGradientFrom: "#1e1e1e",
                        backgroundGradientTo: "#1e1e1e",
                        color: (opacity = 1) => `rgba(81, 150, 244, ${opacity})`,
                        labelColor: () => `rgba(255, 255, 255, 0.2)`,
                        strokeWidth: 3,
                    }}
                    withVerticalLines={false}
                    withHorizontalLabels={false}
                    besizer
                />
            </Chart>
        
            <Purchases ListHeaderComponent={
                <>
                
                <TransactionsHeader>
                    <Text>Last Purchases </Text>
                    <Text> Icons </Text>
                </TransactionsHeader>
                
                <SearchContainer>
                    <Text> Icons </Text>
                    <Search placeholder="Search Transactions" />
                </SearchContainer>
                </>
            } 
                data={PurchaseData} renderItem={renderPurchase} showsVerticalScrollIndicator={false}
            />
            <StatusBar barStyle="light-content" />
        </Container>
    )
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #1e1e1e;
`;

const StatusBar = styled.StatusBar``;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 16px 16px 32px 16px;
`;

const ProfilePhoto = styled.Image`
    width: 40px;
    height: 40px
    border-radius: 20px;
`;

const Welcome = styled.View`
    flex: 1;
    padding: 0 16px;
`;

const Purchases = styled.FlatList`
    background-color: #2c2c2c;
    padding: 16px;
`;
const TransactionsHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
const SearchContainer = styled.View`
    background-color: #3d3d3d;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    border-radius: 8px;
    margin: 16px 0;
`;
const Search = styled.TextInput`
    flex: 1;
    padding: 8px 16px;
    font-family: "Avenir"
    color: #dbdbdb;
`;

const Purchase = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #393939;
    padding-bottom: 12px;
    margin-bottom: 12px;
    
`;

const Chart = styled.View`
    margin: 32px 0;
`;

const PurchaseInfo = styled.View``;

export default HomeScreen;