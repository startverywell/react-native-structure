import { TextInput } from "react-native";
import {TextInputStyle} from '../../styles/compoments';

const CustomTextInput = ({placeholder, secure=false}) => {
    return (
        <TextInput
            style={TextInputStyle.style1}
            placeholder={placeholder}
            secureTextEntry={secure}
        />
    );
}

export default CustomTextInput;