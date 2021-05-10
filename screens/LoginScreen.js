import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  Subtitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  Line,
  MsgBox,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
  SecondaryButton,
  SecondaryButtonText,
} from './../components/styles';
import { Button, View } from 'react-native';

const { primary, secondary, inactive, text } = Colors;

const LoginScreen = () => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/img/comet.png')} />
          {/* <PageTitle>Comet</PageTitle> */}
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="meredithgrey@gmail.com"
                  placeholderTextColor={inactive}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="*********"
                  placeholderTextColor={inactive}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox>...</MsgBox>
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <Line />
                <SecondaryButton facebook={true} onPress={handleSubmit}>
                  <Fontisto name="facebook" color={text} size={25} />
                  <SecondaryButtonText facebook={true}>Sign-in with Facebook</SecondaryButtonText>
                </SecondaryButton>
                <SecondaryButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={text} size={25} />
                  <SecondaryButtonText google={true}>Sign-in with Google</SecondaryButtonText>
                </SecondaryButton>
                <ExtraView>
                  <ExtraText>Don't have an account? </ExtraText>
                  <TextLinkContent>Sign-up</TextLinkContent>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={secondary} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={secondary} />
        </RightIcon>
      )}
    </View>
  );
};

export default LoginScreen;
