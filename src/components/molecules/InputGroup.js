import {CustomText, CustomTextInput} from '../atoms'
import { View } from 'react-native';
import { InputGroupStyle } from '../../styles/compoments';

const InputGroup = ({text, placeholder, secure=false}) => {
    return (
        <View style={InputGroupStyle.style1}>
            <CustomText text={text}/>
            <CustomTextInput placeholder={placeholder} secure={secure}/>
        </View>
    );
}

export default InputGroup;