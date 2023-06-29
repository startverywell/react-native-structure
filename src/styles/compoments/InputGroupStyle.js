import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const InputGroupStyle = StyleSheet.create({
    style1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: wp(90),
        marginBottom: 10
    },
});

export default InputGroupStyle;