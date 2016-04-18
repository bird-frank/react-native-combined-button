import React, {
    View,
    Component,
    TouchableOpacity,
    Text,
    Image,
    PropTypes,
    StyleSheet
} from 'react-native';

import InteractionManager from 'InteractionManager';

const FLEX_DIRECTION ={ 'top': 'column',
                      'right': 'row',
                      'bottom': 'column',
                      'left': 'row' };

const EVENT_HANDLER_PROP_NAMES = ['onPress', 'onPressIn', 'onPressOut'];

export default class CombinedButton extends Component {
    static propTypes = {
        text: PropTypes.string,
        iconPosition: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
        style: View.propTypes.style
    };

    render() {
        const { style, textStyle, iconStyle, text, icon, iconPosition: iconPosition='top' } = this.props;

        console.log(typeof icon);

        let eventHandlers = {};
        for (ehProp of EVENT_HANDLER_PROP_NAMES) {
            if ( this.props[ehProp]) {
                const handler = this.props[ehProp];
                eventHandlers[ehProp] = (args)=> {
                    InteractionManager.runAfterInteractions(()=> handler(args) );
                }
            }
        }


        const btnStyle = [styles.container, style, { 'flexDirection': FLEX_DIRECTION[iconPosition]}];

        const containerProps = Object.assign({}, this.props, eventHandlers, { style: btnStyle });

        return (
            <TouchableOpacity {...containerProps} >
              {( 'top' == iconPosition || 'left' == iconPosition) &&
                  <Image style={[styles.iconStyle, iconStyle]}
                     source={icon} /> }
              {text && text != '' && 
                  <Text style={[styles.textStyle, textStyle]}>{this.props.text}</Text>
              }
              {('bottom' == iconPosition || 'right' == iconPosition) &&
                  <Image style={[styles.iconStyle, iconStyle]}
                     source={icon} /> }
            </TouchableOpacity>
        );
    }; 
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8 
    },

    iconStyle: {
        flex: 0,
        width: 24,
        height: 24
    },

    textStyle: {
        fontSize: 18,
        flex: 1,
        textAlign: 'center'
    }

});
