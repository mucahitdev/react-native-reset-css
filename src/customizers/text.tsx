import { Text, type TextProps } from 'react-native';

export const customizeText = (customProps: TextProps) => {
  const TextRender = (Text as any).render;
  if (!TextRender) {
    (Text as any).defaultProps = customProps;
    return;
  }
  (Text as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TextRender.call(this, props, ref);
  };
};
