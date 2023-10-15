import { TextInput, type TextInputProps } from 'react-native';

export const customizeTextInput = (customProps: TextInputProps) => {
  const TextInputRender = (TextInput as any).render;
  if (!TextInputRender) {
    (TextInput as any).defaultProps = customProps;
    return;
  }
  (TextInput as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TextInputRender.call(this, props, ref);
  };
};
