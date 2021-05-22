import React from 'react';
import {SafeAreaView,View,StyleSheet,Text,Animated,Image} from 'react-native'

//constants
import {images,theme} from '../../constants';
const {onboarding1,onboarding2,onboarding3} = images;

//theme
const { COLORS,FONTS,SIZES } = theme; 

const onBoardings = [
    {
        title: "Let's Travelling",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding1
    },
    {
        title: "Navigation",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding2
    },
    {
        title: "Destination",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
        img: onboarding3
    }
];

const OnBoarding = () => {

    //Render

    function renderContent(){
        return (
            <Animated.ScrollView>
                {onBoardings.map((item,index) => (
                    <View
                        key={index}
                    >
                        {/* Image */}
                        <View>
                            <Image 
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    width: 100,
                                    height: 100
                                }}
                            />
                        </View>
                    </View>
                ))}
            </Animated.ScrollView>            
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderContent()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white
    }
})

export default OnBoarding;