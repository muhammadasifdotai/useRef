// ////////// Example 1: Focus the Input /////

// import React, { useRef } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// export default function App(): JSX.Element{
//   // Step 1: Create a reference using useRef
//   const inputRef = useRef<TextInput | null>(null);
  

//   // Step 2: Function to focus the TextInput when the button is pressed
//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Step 3: Attach the reference to the TextInput */}
//       <TextInput
//         ref={inputRef}
//         style={styles.input}
//         placeholder="Click the button to focus me"
//       />
//       <Button title="Focus the Input" onPress={focusInput} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     width: '80%',
//     paddingHorizontal: 10,
//   },
// });



////////// Example 2: Focus the first Input /////

// setState: ki madad say return ka function bar bar call hota hay. 
// ... bohat say aisay function hotay hay jis may app nhi chahatay kay pora render function dobara call ho. To ya kam useRef ki madad say ho sakta hay. 
// .. is example may hum dekhain gay k jub may button pr click kroon to first input field focus ho jayee.

// import React, { useRef } from 'react';
// import { View, TextInput, Button, StyleSheet } from 'react-native';

// export default function App(): JSX.Element{
//   // Step 1: Create a reference using useRef
//   const inputRef = useRef<TextInput | null>(null);
  

//   // Step 2: Function to focus the TextInput when the button is pressed
//   const focusInput = () => {
//     if (inputRef.current) {
//       inputRef.current.focus();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Step 3: Attach the reference to the TextInput */}
//       <TextInput
//         ref={inputRef}
//         style={styles.input}
//         placeholder="First Name"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Last Name"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//       />
//       <Button title="Focus the Input" onPress={focusInput} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 20,
//     width: '80%',
//     paddingHorizontal: 10,
//   },
// });



// Example 3: Assignment //// 

import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function OTPInput(): JSX.Element {
  const firstInputRef = useRef<TextInput | null>(null);
  const secondInputRef = useRef<TextInput | null>(null);
  const thirdInputRef = useRef<TextInput | null>(null);
  const fourthInputRef = useRef<TextInput | null>(null);

  const handleInputChange = (text: string, ref: React.RefObject<TextInput | null>, nextRef?: React.RefObject<TextInput | null>) => {
    if (text.length === 1 && nextRef && nextRef.current) {
      nextRef.current.focus();
    } else if (text.length === 0 && ref.current) {
      ref.current.focus();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={firstInputRef}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange(text, firstInputRef, secondInputRef)}
      />
      <TextInput
        ref={secondInputRef}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange(text, secondInputRef, thirdInputRef)}
      />
      <TextInput
        ref={thirdInputRef}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange(text, thirdInputRef, fourthInputRef)}
      />
      <TextInput
        ref={fourthInputRef}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        onChangeText={(text) => handleInputChange(text, fourthInputRef)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  input: {
    height: 50,
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 24,
  },
});
