import React from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from 'expo-linear-gradient';

import InfoCard from '../../components/InfoCard'
import {styles} from "./styles";
import {CommonHeader} from "../../components/CommonHeader";

//sample data for the card week
const data = [{
    id: '1',
    amount: '$12,000.00',
    description: 'DeCare Bagdat Appointment Fee',
    date: '02/03/2023',
    active: false,

}];

export default function BalanceScreen() {

    return (
        <View style={styles.container}>
            <CommonHeader title={'My balance'} leftIconType={'back'}/>
            <View style={styles.content}>
                <FlatList
                    contentContainerStyle={{padding: 25}}
                    ListHeaderComponent={
                        <View>
                            <View style={{
                                marginLeft: 10,
                                width: '100%',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                justifyContent: 'center'
                            }}>
                                <View style={[styles.whiteWrapper, styles.shadowProp]}>
                                    <MaskedView
                                        style={{height: 40, marginLeft: 10}}
                                        maskElement={<Text style={styles.number}>0</Text>}
                                    >
                                        <LinearGradient
                                            colors={['#EA717E', '#CF3642']}
                                            start={{x: 0, y: 0.1}} end={{x: 1, y: 0.25}}
                                            style={{flex: 1}}
                                        />
                                    </MaskedView>
                                    <Text style={styles.label}>My Balance</Text>
                                </View>
                                <View style={[styles.whiteWrapper, styles.shadowProp]}>
                                    <MaskedView
                                        style={{height: 40, marginLeft: 10}}
                                        maskElement={<Text style={styles.number}>0</Text>}
                                    >
                                        <LinearGradient
                                            colors={['#ADA4DF', '#9F4EF5']}
                                            start={{x: 0, y: 0.1}} end={{x: 1, y: 0.25}}
                                            style={{flex: 1}}
                                        />
                                    </MaskedView>
                                    <Text style={styles.label}>Treatment Cost</Text>
                                </View>
                                <View style={[styles.whiteWrapper, styles.shadowProp]}>
                                    <MaskedView
                                        style={{height: 40, marginLeft: 10}}
                                        maskElement={<Text style={styles.number}>0</Text>}
                                    >
                                        <LinearGradient
                                            colors={['#A86AF6', '#1A2A99']}
                                            start={{x: 0, y: 0.1}} end={{x: 1, y: 0.25}}
                                            style={{flex: 1}}
                                        />
                                    </MaskedView>
                                    <Text style={styles.label}>Treatment Debt</Text>
                                </View>
                                <View style={[styles.whiteWrapper, styles.shadowProp]}>
                                    <MaskedView
                                        style={{height: 40, marginLeft: 10}}
                                        maskElement={<Text style={styles.number}>0</Text>}
                                    >
                                        <LinearGradient
                                            colors={['#E79035', '#FDBE00']}
                                            start={{x: 0, y: 0.1}} end={{x: 1, y: 0.25}}
                                            style={{flex: 1}}
                                        />
                                    </MaskedView>
                                    <Text style={styles.label}>Weekly Payment</Text>
                                </View>
                            </View>


                            <TouchableOpacity style={styles.mainBtn} onPress={() => alert('Not implemented')}>
                                <Text style={styles.payText}>Pay</Text>
                            </TouchableOpacity>

                            {data.length && <Text style={styles.bigLabel}>Next Payment</Text>}
                        </View>
                    }
                    data={data}
                    renderItem={({item}) => <InfoCard buttonEnabled={false} bigText={item.amount} date={item.date}
                                                      description={item.description} active={item.active}/>}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    )
}




