import React from 'react';
import { NativeModules, Button, SafeAreaView } from 'react-native';

const NewModuleButton = () => {

  const { CalendarModule } = NativeModules;

  const onPress = () => {
    CalendarModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <SafeAreaView>
      <Button
        title="Click to invoke your native module!"
        color="#841584"
        onPress={onPress}
      />
    </SafeAreaView>
  );
};

export default NewModuleButton;