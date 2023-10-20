import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {
    return (
        <View>
            <Text style={styles.Heading}>Elevated Card</Text>

            <ScrollView horizontal={true} style={styles.container}>

                <View style={[styles.card, styles.cardElevated]}>

                    <Text>  Tap</Text>

                </View>
                <View style={[styles.card, styles.cardElevated]}>

                    <Text>  Me</Text>

                </View>

                <View style={[styles.card, styles.cardElevated]}>

                    <Text>  To</Text>

                </View>



                <View style={[styles.card, styles.cardElevated]}>

                    <Text> Scroll</Text>

                </View>


                <View style={[styles.card, styles.cardElevated]}>

                    <Text>  More</Text>

                </View>





                <View style={[styles.card, styles.cardElevated]}>

                    <Text>  lol </Text>

                </View>










            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({


    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    card: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 5,
        margin: 5

    },
    cardElevated:
    {

        backgroundColor: "skyblue",
        shadowOffset: {
            width: 1,
            height: 1

        },
        shadowColor: "red",
        shadowOpacity:0.2,
        shadowRadius:0.3,


    },
    container: {
        padding: 8,


    }


})