import { View } from 'react-native';
import { RowStyle } from '../../styles/compoments';

const Row = ({children}) => {
    return <View style={RowStyle.style1}>{children}</View>;
}

export default Row;