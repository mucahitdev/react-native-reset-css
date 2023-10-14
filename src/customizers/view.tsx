import { View, type ViewProps } from 'react-native';

export const customizeView = (customProps: ViewProps) => {
  const TextRender = (View as any).render;
  if (!TextRender) {
    (View as any).defaultProps = customProps;
    return;
  }
  (View as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TextRender.call(this, props, ref);
  };
};
