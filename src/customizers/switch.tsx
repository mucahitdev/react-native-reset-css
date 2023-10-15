import { Switch, type SwitchProps } from 'react-native';

export const customizeTextSwitch = (customProps: SwitchProps) => {
  const SwitchRender = (Switch as any).render;
  if (!SwitchRender) {
    (Switch as any).defaultProps = customProps;
    return;
  }
  (Switch as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return SwitchRender.call(this, props, ref);
  };
};
