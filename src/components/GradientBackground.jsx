import React from 'react';
import {Dimensions} from 'react-native';
import {
    Canvas,
    LinearGradient,
    vec,
} from '@shopify/react-native-skia';

export const GradientBackground = () => {
    const {width, height} = Dimensions.get('window');

    return (
        <Canvas style={{width: '100%', height: '100%', position: 'absolute', left: 0}}>

                <LinearGradient
                    colors={['transparent', 'grey']}
                    start={vec(0, 0)}
                    end={vec(0, height)}
                />
        </Canvas>
    );
}
