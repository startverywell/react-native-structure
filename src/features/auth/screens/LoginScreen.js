import React from 'react';
import { View, Image } from 'react-native';
import LoginStyle from '../styles/LoginStyle';
import {InputGroup} from '../../../components/molecules';
import {CustomButton, Row, CustomText} from '../../../components/atoms';
import * as Labels from '../../../constants/Localization';

import {TextStyle, ColorStyle} from '../../../styles/common';


const LoginScreen = () => {
  return (
    <View style={LoginStyle.container}>
        <View style={LoginStyle.imageContainer}>
            <Image
                style={LoginStyle.image}
                source={require('../../../assets/images/common/splash.png')}
            />
        </View>
        <View style={LoginStyle.formContainer}>
            <InputGroup text={Labels.email} placeholder={Labels.emailInput} />
            <InputGroup text={Labels.password} placeholder={Labels.passwordInput} secure={true}/>
			<CustomButton 
				label={Labels.login} 
				style={LoginStyle.loginButton} 
				textStyle={[TextStyle.h1,ColorStyle.white]}
			/>
			<Row>
				<CustomButton 
					label={Labels.loginPhone} 
					style={LoginStyle.loginPhone} 
					textStyle={[TextStyle.h4,ColorStyle.black]}
				/>
				<CustomButton 
					label={Labels.forgetPassword} 
					style={LoginStyle.forgetPassword} 
					textStyle={[TextStyle.h4,ColorStyle.black]}
				/>
			</Row>
			<Row>
				<View style={{ height: 1, backgroundColor: 'black',width:'30%' }} />
				<CustomText text={Labels.orContinue} style={LoginStyle.centerText}/>
				<View style={{ height: 1, backgroundColor: 'black',width:'30%' }} />
			</Row>
			
					
        </View>
    </View>
  );
};
export default LoginScreen;