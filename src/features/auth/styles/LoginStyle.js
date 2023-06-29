import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from "../../../constants/Color";

const LoginStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: color.lightpink
    },
    imageContainer: {
        width: wp(100),
        height: hp(50),
        top:0,
        position:'absolute',
    },
    image: {
        width: wp(100),
        height: hp(50),
        top:0, 
    },
    formContainer: {
        width: wp(80),
        height: hp(100),
        marginTop: 30,
        top:hp(50),
        alignItems: 'center',
        position:'absolute'
    },
    loginButton: {
        backgroundColor: color.lightblue,
        padding: 10,
        borderRadius: 0,
        width:'80%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginPhone: {
        backgroundColor: color.lightpink,
        padding: 10,
        borderRadius: 0,
        width:'57%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    forgetPassword: {
        backgroundColor: color.lightpink,
        padding: 10,
        borderRadius: 0,
        width:'40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    centerText: {
        width: '40%',
        textAlign:'center'
    },
});

export default LoginStyle;