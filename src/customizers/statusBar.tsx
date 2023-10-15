import { StatusBar, type StatusBarProps } from 'react-native';

export const customizeStatusBar = (customProps: StatusBarProps) => {
  const StatusBarRender = (StatusBar as any).render;
  if (!StatusBarRender) {
    (StatusBar as any).defaultProps = customProps;
    return;
  }
  (StatusBar as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
    };
    return StatusBarRender.call(this, props, ref);
  };
};
