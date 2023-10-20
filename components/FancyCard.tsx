import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
    return (
        <View>
            <Text style={styles.Heading}>Trending Places</Text>


            <View style={[styles.card, styles.cardElevated]}>


                <Image
                    source={{

                        uri: 'https://thumbs.dreamstime.com/z/hawa-mahal-jaipur-india-22153139.jpg?w=992'

                    }}
                    style={styles.imageCard}

                />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    Heading: {

    },
    card: {},
    cardElevated: {},
    imageCard: {

        height: 180


    }
})