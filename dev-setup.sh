#!/usr/bin/env bash

# publish module to the local yalc-"registry"
node_modules/.bin/yalc publish

# change working directory to Example
cd Example

# unlink binaries in case they are to prevent libraries not being linked correctly
node node_modules/react-native/local-cli/cli.js unlink react-native-bluetooth-state

# use local library from the yalc-"registry"
../node_modules/.bin/yalc link react-native-bluetooth-state

# link binaries in case they aren’t linked yet
node node_modules/react-native/local-cli/cli.js link react-native-bluetooth-state
