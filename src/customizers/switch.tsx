import { Switch, type SwitchProps } from 'react-native';

export const customizeTextSwitch = (customProps: SwitchProps) => {
  const TextRender = (Switch as any).render;
  if (!TextRender) {
    (Switch as any).defaultProps = customProps;
    return;
  }
  (Switch as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return TextRender.call(this, props, ref);
  };
};
