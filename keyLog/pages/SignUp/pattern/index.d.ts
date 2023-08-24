declare module "@bolan9999/react-native-pattern-lock" {
    import * as React from 'react';
    
    interface PropsType {
      message?: string;
      rowCount?: number;
      errorColor?: string;
      columnCount?: number;
      activeColor?: string;
      inactiveColor?: string;
      patternMargin?: number;
      onCheck?: (res: string) => boolean;
    }
    export function PatternLock(props: PropsType): React.ReactNode;
  }