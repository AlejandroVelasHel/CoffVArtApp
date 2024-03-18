import React from 'react';
import {Dimensions} from 'react-native';

import {
    Canvas,
    Circle,
    LinearGradient,
    vec,
    Fill,
    BackdropFilter,
    Blur
} from '@shopify/react-native-skia';

export const BlurBackgroundSpheres = () => {

    const {width, height} = Dimensions.get('window');
    const c1 = vec(width / 2, height / 2.6);
    // const c2 = vec(width / 1.5, height / 1.4);
    const r = Math.min(width, height) / 2.5;

    return (
        <Canvas style={{width: '100%', height: '100%', position: 'absolute', left: 0, opacity: .8}}>
            <Fill color={'#FFFFFF'}/>
            <Circle c={c1} r={r}>
                <LinearGradient
                    colors={
                        [
                            '#e199a1',
                            '#9F212F',
                        ]}
                    start={vec(c1.x, c1.y - r)}
                    end={vec(c1.x, c1.y + r)}
                />
            </Circle>
            {/*<Circle c={c2} r={r/1.3} >*/}
            {/*    <LinearGradient*/}
            {/*        colors={['#5085DE', '#03193f']}*/}
            {/*        start={vec(c2.x, c2.y - r)}*/}
            {/*        end={vec(c2.x, c2.y + r)}*/}
            {/*    />*/}
            {/*</Circle>*/}

            <BackdropFilter filter={<Blur blur={17}/>}>
                <Fill color={'#FFFFFF90'}/>
            </BackdropFilter>
        </Canvas>
    )
}