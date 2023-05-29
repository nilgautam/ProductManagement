import { Text, View } from "react-native";
import React from "react";
import BaseSafeArea from "../../component/baseSafeArea/baseSafeArea";
import { NavigationComponentProps } from "react-native-navigation";

export interface Props extends NavigationComponentProps { }
const Home: React.FC<Props> = (props) => {

    return (
        <BaseSafeArea componentId={props.componentId} isHideAppBar={true}>
            <Text>Home</Text>
        </BaseSafeArea>
    )


}

export default Home;