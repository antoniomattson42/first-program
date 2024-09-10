import React from 'react';
import { TextInput } from 'react-native';

interface TextFieldsProps {
  value: string;
  onChangeText: (text: string) => void;
}

const TextFields: React.FC<TextFieldsProps> = ({ value, onChangeText }) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      value={value}
      placeholder="Enter a city"
      style={{
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        padding: 10,
      }}
    />
  );
};

export default TextFields;
