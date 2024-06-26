import React from 'react';
import { Text } from 'react-native';
import { useTheme } from './CountryTheme';
export const CountryText = (props) => {
    const { fontFamily, fontSize, onBackgroundTextColor } = useTheme();
    return (React.createElement(Text, Object.assign({}, props, { style: { fontFamily, fontSize, color: onBackgroundTextColor , textAlign: 'right' , marginHorizontal: 10 } })));
};
//# sourceMappingURL=CountryText.js.map