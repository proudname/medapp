import {View} from "react-native";
import React from "react";
import {ResizeMode, Video} from "expo-av";
import styles from "./styles";

type Props = {
    source: string
}

export const VideoPlayer = ({source}: Props) => {
    const video = React.useRef<Video>(null);
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: source,
                }}
                useNativeControls
                resizeMode={ResizeMode.STRETCH}
                isLooping
            />
        </View>
    );
};