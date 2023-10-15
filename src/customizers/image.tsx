import { Image, type ImageProps } from 'react-native';

export const customizeImage = (customProps: ImageProps) => {
  const ImageRender = (Image as any).render;
  if (!ImageRender) {
    (Image as any).defaultProps = customProps;
    return;
  }
  (Image as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return ImageRender.call(this, props, ref);
  };
};
