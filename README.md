# @ionic/angular: ionChange Firing Issue When Filtering Input Data

## Issue

When attempting to filter data input into a text field, the `ionChange` event appears to not always fire.

## How to Reproduce

2. Set up the app by running npm install and ionic cordova prepare.
3. Run the app on a device with ionic cordova run android --device.
4. In the app, enter letters into the text field. Eventually, one or more letters will not be filtered out of the text field.
5. Add a debounce time to the input (I used 50ms) and run the app on a device again.
6. In the app, enter letters into the text field. I haven't been able to yet.

## Anticipated Behavior

Without any debounce time set, `ionChange` should always fire.
