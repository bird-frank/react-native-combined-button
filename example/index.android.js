/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';

import CombinedButton from 'react-native-combined-button';

function alert(message) {
    Alert.alert( 'Message',
                 message    );
}

class CombinedButtonExample extends Component {
    render() {
        return (
            <View style={styles.container}>
              <CombinedButton text="Default Style" />

              <CombinedButton style={styles.buttonStyle}
                              textStyle={styles.textStyle}
                              text="Set Style" />
              <View style={styles.buttonRow}>
                <CombinedButton style={styles.iconBtn}
                                iconPosition="top"
                                icon={require('./img/ic_launcher.png')} />
                <CombinedButton style={styles.iconBtn}
                                iconPosition="left"
                                text="Left Icon"
                                icon={require('./img/ic_launcher.png')} />

                <CombinedButton style={styles.iconBtn}
                                iconPosition="right"
                                text="Right Icon"
                                icon={require('./img/ic_launcher.png')} />
              </View>

              <CombinedButton style={styles.buttonStyle}
                              textStyle={styles.textStyle}
                              btnStyle={styles.largeBtn}
                              text="Set Style" />
              <View style={styles.buttonRow}>
                <CombinedButton style={[styles.iconBtn, { 'alignSelf': 'stretch'}]}
                                iconStyle={styles.largeBtn}
                                icon={require('./img/ic_launcher.png')} />
                <CombinedButton style={styles.iconBtn}
                                iconStyle={styles.largeBtn}
                                text="Top Icon"
                                icon={require('./img/ic_launcher.png')} />
                <CombinedButton style={styles.iconBtn}
                                iconStyle={styles.largeBtn}
                                iconPosition="bottom"
                                text="Bottom Icon"
                                icon={require('./img/ic_launcher.png')} />
              </View>

              <CombinedButton style={styles.buttonStyle}
                              textStyle={styles.textStyle}
                              onPress={()=> alert("onPress")}
                onLongPress={()=> alert("onLongPress")}
                onLongIn={()=> alert("onLongIn")}
                onLongOut={()=> alert("onLongOut")}
                text="Event Handler" />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },

    buttonRow: {
        margin: 16,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStyle: {
        margin: 8,
        alignSelf: 'stretch',
        backgroundColor: '#000099',
        borderColor: '#000033',
        borderWidth: 1,
        borderRadius: 5,
        padding: 8 
    },

    textStyle: {
        color: '#E0E0E0'
    },

    iconBtn: {
        margin: 8,
        backgroundColor: '#FFFFCC'
    },

    largeBtn: {
        width: 48,
        height: 48
    }

});

AppRegistry.registerComponent('CombinedButtonExample', () => CombinedButtonExample);
