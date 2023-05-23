import React, {useEffect} from "react";
import {FlatList, RefreshControl, Share, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather} from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import {LinearGradient} from 'expo-linear-gradient';
import InfoCard from '../../components/InfoCard'
import Theme from "../../theme";
import {toast} from "../../utils/toast";
import * as Clipboard from 'expo-clipboard';
import {CommonHeader} from "../../components/CommonHeader";
import Screen from "../../components/Screen";
import {
    useGeneratePromoMutation,
    useGetMyBonusTransactionsQuery,
    useGetMyBonusWalletQuery
} from "../../api/billing.api";
import moment from "moment";

//sample data for the card week
const data = [{
    id: '1',
    amount: '$55.00',
    description: 'DeCare Bagdat Appointment Fee',
    date: '02/03/2023',
    active: false,
}];

export default function AffiliateScreen() {

    const [generatePromo, {data: promo}] = useGeneratePromoMutation();
    const {data: bonusTransactions, refetch: refetchTransactions} = useGetMyBonusTransactionsQuery();
    const {data: bonusWallet, refetch: refetchBonusWallet} = useGetMyBonusWalletQuery();
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        generatePromo();
    }, [])

    console.log(bonusTransactions)

    const handlePromoCopy = async () => {
        if (!promo) return;
        await Clipboard.setStringAsync(promo.result);
        toast('Promo code copied', 'success');
    }

    const handlePromoShare = async () => {
        if (!promo) return;
        Share.share({
            message: promo.result
        })
    }

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true)
        await generatePromo()
        await refetchBonusWallet()
        await refetchTransactions()
        setRefreshing(false)
    }, []);

    return (
        <Screen>
            <CommonHeader title={'My Bonuses'} leftIconType={'back'}/>
            <View style={styles.content}>
                <FlatList
                    refreshControl={
                        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                    }
                    contentContainerStyle={{padding: 25}}
                    ListHeaderComponent={<View>
                        <View style={[styles.whiteWrapper, styles.shadowProp]}>
                            <Text style={styles.label}>Total</Text>
                            <MaskedView
                                style={{height: 40, marginLeft: 10}}
                                maskElement={<Text style={styles.number}>{bonusWallet?.result.balance || 0}</Text>}
                            >
                                <LinearGradient
                                    colors={['#EA717E', '#CF3642']}
                                    start={{x: 0, y: 0.1}} end={{x: 1, y: 0.25}}
                                    style={{flex: 1}}
                                />
                            </MaskedView>
                        </View>
                        <View style={{
                            height: 170,
                            justifyContent: 'space-between',
                            flexDirection: 'column'
                        }}>

                            <View>
                                <Text style={{opacity: 0.6, marginBottom: 5}}>My Promo</Text>
                                <View style={styles.codelinkWrapper}>
                                    <Text style={styles.linkText}>{promo?.result}</Text>
                                    <View style={{
                                        flexDirection: 'row',
                                        width: 80,
                                        justifyContent: 'space-between'
                                    }}>
                                        <TouchableOpacity style={styles.copyBtn} onPress={handlePromoCopy}>
                                            <Feather name="copy" size={18} color="white"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.copyBtn} onPress={handlePromoShare}>
                                            <AntDesign name="sharealt" size={18} color="white"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {data.length && <Text style={styles.bigLabel}>Bonuses History</Text>}
                    </View>}
                    data={bonusTransactions?.result || []}
                    renderItem={({item}) => <InfoCard
                        bigText={item.amount.toString()}
                        date={moment(item.createdAt).format('DD/MM/YYYY HH:mm')}
                        description={item.userId} active={item.type === 'topup'}/>}
                    keyExtractor={item => item.id}
                />
            </View>

        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: Theme.primaryColor,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    content: {
        flex: 5,
    },
    heading: {
        marginTop: 35,
        fontSize: 18,
        color: '#fff'
    },
    settingsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        padding: 6,
        marginTop: 35
    },
    settings: {
        height: 25,
        width: 25,
        resizeMode: 'contain'
    },
    whiteWrapper: {
        borderRadius: 15,
        width: '100%',
        padding: 20,
        height: 150,
        marginRight: 15,
        marginBottom: 15,
        justifyContent: 'center',
    },
    shadowProp: {
        shadowColor: '#e5e5e5',
        shadowOffset: {width: -2, height: 15},
        shadowOpacity: 0.8,
        shadowRadius: 15,
    },
    number: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center'
    },
    codelinkWrapper: {
        backgroundColor: Theme.bgWhite,
        borderRadius: 7,
        paddingLeft: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#E6E8EC',
        flexDirection: 'row',
        paddingVertical: 5,
        paddingRight: 5
    },
    shareWrapper: {
        backgroundColor: Theme.bgWhite,
        borderRadius: 7,
        paddingLeft: 15,
        alignItems: 'center',
        width: '100%',
        borderWidth: 1.5,
        borderColor: '#E6E8EC',
        flexDirection: 'row',
        paddingVertical: 8,
        paddingRight: 5
    },
    linkText: {
        fontWeight: "600",
        fontSize: 14
    },
    label: {
        textAlign: 'center',
        fontSize: 16
    },
    bigLabel: {
        fontSize: 18,
        marginTop: 25,
        fontWeight: 'bold'
    },
    copyBtn: {
        backgroundColor: Theme.primaryColor,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    shareLogos: {
        height: 35,
        width: 35,
        resizeMode: 'contain'
    },
    fbinsta: {
        height: 28,
        width: 28,
        resizeMode: 'contain'
    },
});

