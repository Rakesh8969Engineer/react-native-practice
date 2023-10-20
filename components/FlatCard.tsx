import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCard() {
    return (
        <View>

            <Text style={styles.Heading}> Flate Card</Text>
            <View style={styles.container} >

                <View style={[styles.card, styles.cardOne]}>

                    <Text>

                        Red

                    </Text>

                </View>

                <View style={[styles.card, styles.cardTwo]}>

                    <Text>

                        Green

                    </Text>

                </View>

                <View style={[styles.card, styles.cardThree]}>

                    <Text>

                        Yellow Green

                    </Text>

                </View>



                <View style={[styles.card, styles.cardThree]}>

                    <Text>

                        Yellow Green

                    </Text>

                </View>











                


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 20
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        color: "white",
        width: 110,
        height: 100,
        borderRadius: 5,
        margin: 8
    },
    cardOne: {
        backgroundColor: "red"
    },
    cardTwo: {
        backgroundColor: "green"
    },
    cardThree: {
        backgroundColor: "yellowgreen"
    }


});
