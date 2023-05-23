import React from "react";
import {View} from "react-native";
import Modal from "react-native-modal";
import {ButtonGroup, Text} from "@rneui/base";

type Props = {
    title: string,
    visible: boolean,
    content?: React.ReactNode
    acceptText?: string,
    cancelText?: string,
    onCancel?: () => void
    onAccept?: () => void
}

function AppDialog(props: Props) {
    const {
        onAccept,
        onCancel,
        cancelText,
        acceptText,
        content,
        visible,
        title
    } = Object.assign<Required<Omit<Props, 'title' | "visible">>, Props>({
        onCancel: () => {
        },
        onAccept: () => {
        },
        acceptText: 'Accept',
        cancelText: 'Cancel',
        content: null
    }, props)

    const handleAccept = () => {
        onAccept();
    };

    const handleCancel = () => {
        onCancel()
    };

    return (
        <Modal isVisible={visible} style={{
            backgroundColor: "white",
            padding: 20,
            flex: 1,
            height: 200,
            minHeight: 200,
        }}>
            <View style={{
                justifyContent: 'center',
                height: 400
            }}>
                <View style={{
                    justifyContent: 'center',
                    marginBottom: 20,
                }}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                        {title}
                    </Text>
                </View>
                <View style={{flex: 1}}>
                    {content}
                </View>

                <ButtonGroup buttons={[cancelText, acceptText]} onPress={(event) => {
                    switch (event) {
                        case 0:
                            handleCancel()
                            return;
                        case 1:
                            handleAccept();
                            return;
                    }
                }}/>
                {/*<Button title={cancelText} onPress={handleCancel}/>,*/}
                {/*<Button title={acceptText} onPress={handleAccept}/>*/}
            </View>
        </Modal>
    );
}

export default AppDialog;