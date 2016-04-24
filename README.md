# react-native-combined-button
A button component combined with icon and text for react-native app.

# Demo

![Demo](http://i46.photobucket.com/albums/f136/bird_frank/Screenshot_2016-04-24-15-05-47_zps9qvwzg42.png)

# Usage

```js
import CombinedButton from 'react-native-combined-button';

<CombinedButton style={styles.iconBtn}
   iconPosition="left"
   text="Left Icon"
   icon={require('./img/ic_launcher.png')} />
```

# Properties

+ ```style``` : style of the CombinedButton. Can be an Array.
+ ```text``` : Button text, optional.
+ ```icon``` : Button icon, optional.
+ ```iconPosition``` : Position of the icon in the button. Can be 'top', 'right', 'bottom' or 'left'.
+ ```textStyle``` : style of the button text, optional
+ ```iconStyle``` : style of the icon, optional
