import { Modal, type ModalProps } from 'react-native';

export const customizeModal = (customProps: ModalProps) => {
  const ModalRender = (Modal as any).render;
  if (!ModalRender) {
    (Modal as any).defaultProps = customProps;
    return;
  }
  (Modal as any).render = (props: any, ref: any) => {
    props = {
      ...customProps,
      ...props,
      style: [customProps.style, props.style],
    };
    return ModalRender.call(this, props, ref);
  };
};
