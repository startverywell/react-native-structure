import { TouchableOpacity } from "react-native";
import CustomText from "./CustomText";

const CustomButton = ({label, style, onPress, textStyle}) => {
    return (
        <TouchableOpacity 
            style={style} 
            onPress={onPress ? onPress : () => alert("Clicked")}
        >
            <CustomText text={label} style={textStyle}/>
        </TouchableOpacity>
    );
}

export default CustomButton;