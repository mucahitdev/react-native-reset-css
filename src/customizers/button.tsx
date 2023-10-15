import { Button, type ButtonProps } from 'react-native';

export const customizeButton = (customProps: ButtonProps) => {
  const ButtonRender = (Button as any).render;
  if (!ButtonRender) {
    (Button as any).defaultProps = customProps;
    return;
  }
  (Button as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
    };
    return ButtonRender.call(this, props, ref);
  };
};
