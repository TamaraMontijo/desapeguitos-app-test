import { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';

import { cn } from '@/lib/utils';
import { colors } from '@/styles/colors';

export interface InputProps
  extends React.ComponentPropsWithoutRef<typeof TextInput> {
  label?: string;
  labelClasses?: string;
  inputClasses?: string;
}
const Input = forwardRef<React.ElementRef<typeof TextInput>, InputProps>(
  ({ className, label, labelClasses, inputClasses, ...props }, ref) => (
    <View className={cn('flex flex-col gap-1.5', className)}>
      {label ? <Text className={cn('text-base', labelClasses)}>{label}</Text> : null}
      <TextInput
      placeholderTextColor={colors.purple[100]}
        className={cn(
          inputClasses,
          'border border-input py-2.5 px-4 rounded-lg border-purple-500 text-purple-100'
        )}
        {...props}
      />
    </View>
  )
);

export { Input };
