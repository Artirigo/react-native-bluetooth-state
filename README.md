# react-native-bluetooth-state
Native module for React Native to get the current bluetooth state of the device. This is a fork of [frostney/react-native-bluetooth-state](https://github.com/frostney/react-native-bluetooth-state), which adds the functionality for Android.

## Installation

React Native >=0.7.0 is needed.

Install it via npm:
```
$ npm install --save https://github.com/Artirigo/react-native-bluetooth-state.git
```

## Link the libraries

### iOS
Follow the [React Native documentation for Linking Libraries](https://facebook.github.io/react-native/docs/linking-libraries-ios.html).

### Android
Add the following to your `android/settings.gradle`:
```
include ':react-native-bluetooth-state'
project(':react-native-bluetooth-state').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-bluetooth-state/android')
```

Add the following to the `dependencies`-section inside your `android/app/build.gradle`:
```
dependencies {
    // ... other dependencies
    compile project(':react-native-bluetooth-state')
}

```

## Usage

```javascript
import BluetoothState from 'react-native-bluetooth-state';

const stateChangeHandler = bluetoothState => {
  // bluetoothState can either be "on", "off", "unknown", "unauthorized" or "unsupported", on iOS also "resetting"
};

// subscribe to changes
BluetoothState.subscribe(stateChangeHandler);

// Initialize needs to be called otherwise we don't get the initial state
BluetoothState.initialize();

// unsubscribe specific handler
BluetoothState.unsubscribe(stateChangeHandler);

// remove all change handlers
BluetoothState.clear();
```

## License
MIT
