import { Image, type ImageProps } from 'react-native';

export const customizeImage = (customProps: ImageProps) => {
  const TextRender = (Image as any).render;
  if (!TextRender) {
    (Image as any).defaultProps = customProps;
    return;
  }
  (Image as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TextRender.call(this, props, ref);
  };
};
