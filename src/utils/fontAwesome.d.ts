declare module 'react-native-vector-icons/FontAwesome' {
    import { ReactNode } from 'react';
    import { StyleProp, TextStyle } from 'react-native';
  
    export interface FontAwesomeIconProps {
      name: string;
      size?: number;
      color?: string;
      style?: StyleProp<TextStyle>;
    }
  
    export default function FontAwesomeIcon(props: FontAwesomeIconProps): ReactNode;
  }