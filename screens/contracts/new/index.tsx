import {FlatList, Image, View} from "react-native";
import styles from "./styles";
import {Button} from "@rneui/base";
import {useFormik} from "formik";
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";


export const ContractNewScreen = () => {

    const [deployActive, setDeployActivity] = useState(false);

    const formik = useFormik<{ images: string[] }>({
        initialValues: {
            images: []
        },
        onSubmit: async (values) => {
            setDeployActivity(true);
            try {
                await Promise.all(values.images.map(fetchImageFromUri));
            } catch (e) {
                alert('Deploy failed!')
            }
            setDeployActivity(false);
        }
    });

    const fetchImageFromUri = async (uri: string) => {
        const response = await fetch(uri);
        return response.blob();
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.canceled) {
            console.log(result.assets);
            await formik.setFieldValue('images', result.assets.map(asset => asset.uri));
        }
    }

    return (
        <View style={styles.container}>
            <Button title="Pick the shots" onPress={pickImage}/>
            <FlatList
                data={formik.values.images}
                renderItem={
                    ({item}) => <View style={styles.item}>
                        <Image resizeMethod={'scale'} source={{uri: item}} style={{width: '100%', height: 200}}/>
                    </View>
                }
            />
            <Button title={deployActive ? "Saving..." : "Send"} onPress={() => formik.handleSubmit()}
                    disabled={deployActive}/>
        </View>
    );
}

export default ContractNewScreen;