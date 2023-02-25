import {useNavigation} from "@react-navigation/native";
import {NavigationProp} from "@react-navigation/core/src/types";
import {RootStackParamList} from "../types";

export const useAppNavigation: () => NavigationProp<RootStackParamList> = useNavigation