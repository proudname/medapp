import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import Theme from "../../theme";
import HorizontalCard from "../../components/HorizontalCard";
import Screen from "../../components/Screen";
import {CommonHeader} from "../../components/CommonHeader";

export default function HomeScreen() {

    return (
        <Screen>
            <CommonHeader/>
            <View style={styles.contentWrapper}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>


                        <HorizontalCard navTo={'PlanList'} artwork={Theme.refreshdrop} word1={'My'}
                                        word2={'Treatment'} color1={'#EA717E'} color2={'#CF3642'}/>
                        <HorizontalCard navTo={'ScheduleList'} artwork={Theme.bigcalander} word1={'My'}
                                        word2={'Appointments'} color1={'#ADA4DF'} color2={'#9F4EF5'}/>
                        <HorizontalCard navTo={'Balance'} artwork={Theme.moneybag} word1={'My'}
                                        word2={'Balance'}
                                        color1={'#A86AF6'} color2={'#1A2A99'}/>
                        <HorizontalCard navTo={'Affiliate'} artwork={Theme.biggift} word1={'My'}
                                        word2={'Affiliate'}
                                        color1={'#E79035'} color2={'#FDBE00'}/>
                    </View>

                </ScrollView>

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
    contentWrapper: {
        flex: 5,
    },
    content: {
        padding: 25
    },
    logo: {
        resizeMode: 'contain',
        height: 45,
        width: 45,
        marginTop: 35
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
    }
});

