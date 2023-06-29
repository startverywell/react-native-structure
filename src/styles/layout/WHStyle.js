import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const WHStyle = (width) => StyleSheet.create({
    width: {
        width: wp(width)
    },
    height: {
        height: hp(width)
    }
});

export default WHStyle;