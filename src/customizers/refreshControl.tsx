import { RefreshControl, type RefreshControlProps } from 'react-native';

export const customizeRefreshControl = (customProps: RefreshControlProps) => {
  const RefreshControlRender = (RefreshControl as any).render;
  if (!RefreshControlRender) {
    (RefreshControl as any).defaultProps = customProps;
    return;
  }
  (RefreshControl as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
    };
    return RefreshControlRender.call(this, props, ref);
  };
};
