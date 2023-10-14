import { TextInput, type TextInputProps } from 'react-native';

export const customizeTextInput = (customProps: TextInputProps) => {
  const TextRender = (TextInput as any).render;
  if (!TextRender) {
    (TextInput as any).defaultProps = customProps;
    return;
  }
  (TextInput as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TextRender.call(this, props, ref);
  };
};
