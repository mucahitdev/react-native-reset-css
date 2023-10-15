import { Pressable, type PressableProps } from 'react-native';

export const customizePressable = (customProps: PressableProps) => {
  const PressableRender = (Pressable as any).render;
  if (!PressableRender) {
    (Pressable as any).defaultProps = customProps;
    return;
  }
  (Pressable as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return PressableRender.call(this, props, ref);
  };
};
