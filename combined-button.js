import React, { Component } from 'react';
import PropTypes from 'prop-types'; //PropTypes moved into separate package
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    InteractionManager,
    StyleSheet
} from 'react-native';

const FLEX_DIRECTION ={ 'top': 'column',
                      'right': 'row',
                      'bottom': 'column',
                      'left': 'row' };

const EVENT_HANDLER_PROP_NAMES = ['onPress', 'onPressIn', 'onPressOut'];

export default class CombinedButton extends Component {
    static propTypes = {
        text: PropTypes.string,
        iconPosition: PropTypes.oneOf(['top', 'left', 'bottom', 'right']),
        style: PropTypes.any
    };

    render() {
        const { style, textStyle, iconStyle, text, icon, iconPosition: iconPosition='top' } = this.props;

        let eventHandlers = {};
        for (ehProp of EVENT_HANDLER_PROP_NAMES) {
            if ( this.props[ehProp]) {
                const handler = this.props[ehProp];
                eventHandlers[ehProp] = handler;
            }
        }

        let btnStyle = [styles.container];
        if ( typeof style == 'Array' ) {
            btnStyle = btnStyle.concat(style);
        } else {
            btnStyle.push(style);
        }
        btnStyle.push( { 'flexDirection': FLEX_DIRECTION[iconPosition]});

        const containerProps = Object.assign({}, this.props, eventHandlers, { style: btnStyle });

        return (
            <TouchableOpacity {...containerProps} >
              {( 'top' == iconPosition || 'left' == iconPosition) && icon && 
                  <Image style={[styles.iconStyle, iconStyle]}
                     source={icon} /> }
              {text && text != '' && 
                  <Text style={[styles.textStyle, textStyle]}>{this.props.text}</Text>
              }
              {('bottom' == iconPosition || 'right' == iconPosition) && icon &&
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
