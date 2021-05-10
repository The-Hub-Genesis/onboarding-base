import styled from "styled-components";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

//Change colors depending on need
export const Colors = {
  primary: "#ffffff",
  secondary: "rgba(0, 112, 112, 1)",
  tertiary: "#FFBD10",
  text: "#2D2D2D",
  inactive: "#c4c4c4",
  danger: "#FF8159",
};

const { primary, secondary, tertiary, text, inactive, danger } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 120}px;
  background-color: ${primary};
`;

export const LandingContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 100}px;
  background-color: ${secondary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 100%;
  height: 10%;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${text};
  padding: 10px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${inactive};
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const StyledTextInput = styled.TextInput`
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${inactive};
`;

export const StyledInputLabel = styled.Text`
  color: ${text};
  padding-top: 10px;
  font-size: 15px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${secondary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-vertical: 5px;
  height: 60px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-vertical: 5px;
  height: 60px;
  border: 1px solid ${text}
    ${(props) =>
      props.google == true &&
      `
    flex-direction: row; 
    justify-content: center;
  `}
    ${(props) =>
      props.facebook == true &&
      `
    flex-direction: row; 
    justify-content: center;
  `};
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const SecondaryButtonText = styled.Text`
  ${(props) =>
    props.google == true &&
    `
  padding-right: 25px;
  padding-left: 25px;
  color: ${text};
`}
  ${(props) =>
    props.facebook == true &&
    `
  padding-right: 25px;
  padding-left: 25px;
  color: ${text};
`};
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${inactive};
  margin-vertical: 10px;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${text};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${secondary};
  font-size: 15px;
`;
