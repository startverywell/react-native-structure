import { Text } from "react-native";
import {TextStyle} from '../../styles/compoments';

const CustomText = ({text, style}) => {
    return (
        <Text style={style? style:TextStyle.style1}>
            {text}
        </Text>
    );
}

export default CustomText;