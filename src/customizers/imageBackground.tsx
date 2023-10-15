import { ImageBackground, type ImageBackgroundProps } from 'react-native';

export const customizeImageBackground = (customProps: ImageBackgroundProps) => {
  const ImageBackgroundRender = (ImageBackground as any).render;
  if (!ImageBackgroundRender) {
    (ImageBackground as any).defaultProps = customProps;
    return;
  }
  (ImageBackground as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return ImageBackgroundRender.call(this, props, ref);
  };
};
