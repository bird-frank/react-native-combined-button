import React, {
    TouchableOpacity,
    Component,
    Text,
    Image,
    PropTypes,
    StyleSheet
} from 'react-native';

class CombinedButton extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    render() {
        return (
            <TouchableOpacity>
              <Text>{this.props.text}</Text>
            </TouchableOpacity>
        );
    }; 
}
