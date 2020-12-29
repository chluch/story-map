import { createPortal } from 'react-dom';
import { ModalProps } from '../../type/types';
import styles from './Modal.module.css';

const Modal = ({ show, hide }: ModalProps) => {
  return (
    createPortal(
      <div className={`${styles.modalBackdrop} ${show ? styles.fadeIn : styles.fadeOut}`}>
        <div className={styles.modalMain}>
          <div className={`${styles.modal} ${show ? styles.open : styles.close}`}>
            <div className={styles.modalHeader}>
              <h1>Title</h1>
              <button type="button" className={styles.modalCloseBtn} data-dismiss="modal" aria-label="Close" onClick={hide}>
                &times;
              </button>
            </div>
            <div className={styles.modalBody}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit ipsum ultricies,
                interdum felis ut, scelerisque diam. Pellentesque ornare leo placerat commodo posuere. Aliquam
                aliquet luctus pharetra. Aliquam tempor sollicitudin leo, vitae lacinia nibh aliquam et. Praesent
                viverra efficitur interdum. Aliquam id erat tortor. Vestibulum molestie ullamcorper mauris, et
                condimentum enim imperdiet ut.
              </p>
              <p>
                Aenean placerat turpis ligula, nec scelerisque ante efficitur non. Nulla non suscipit purus, eget
                facilisis mi. Mauris porta ex eu justo gravida tincidunt. Pellentesque iaculis, libero at
                ullamcorper rutrum, ante libero blandit est, eget lobortis diam magna vel leo. Aliquam commodo
                viverra pharetra. Nulla pretium sapien lectus, et maximus arcu sagittis eget. Proin suscipit est
                elit, ornare accumsan purus rhoncus ut. Phasellus nec interdum libero. Vestibulum ornare mollis mi,
                at finibus ante. Sed et leo non nisi rutrum blandit eu eget libero. Nunc rutrum gravida tincidunt.
                Suspendisse auctor venenatis euismod.
              </p>
              <p>
                Vivamus posuere ultricies tortor at sagittis. Ut accumsan bibendum dolor, nec tempus felis
                scelerisque eget. Suspendisse vel posuere mauris. Nulla faucibus placerat orci, eget hendrerit
                sapien gravida id. Sed aliquet elit turpis, ac dapibus elit aliquet pulvinar. Proin a sapien
                efficitur, convallis ante ut, tempor augue. Phasellus ut pellentesque nunc, et egestas nisi. Nullam
                pharetra neque sem, sed congue enim dictum vitae.
              </p>
              <p>
                Donec eros lacus, posuere a eros sit amet, feugiat interdum dui. Sed nec sapien vel augue luctus
                tempus. Curabitur sollicitudin eget arcu varius sodales. Aliquam erat volutpat. Quisque porta in
                nulla venenatis tristique. Vivamus enim odio, dapibus sed ultricies vitae, vulputate at magna. Sed
                tincidunt pulvinar lorem, ac consectetur nisl mattis ac. Duis id suscipit magna, ut varius ante.
                Cras nec efficitur lorem. Nulla commodo sollicitudin tellus, ut aliquet est gravida sit amet.
              </p>
              <p>
                Sed id ipsum ut quam ullamcorper tincidunt in eu tellus. Nam vitae ultricies est. Vestibulum ante
                ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc aliquam quam ut lacus
                vestibulum feugiat. Nunc dui nunc, tincidunt ac sagittis ac, finibus varius eros. Pellentesque
                ultrices nunc vel velit laoreet, vel aliquet nisl commodo. Aliquam imperdiet tortor in quam
                egestas, non interdum est eleifend. In ut lacus risus. In aliquam leo elit. Duis nulla diam,
                dapibus in pretium non, maximus at nisi. Sed et lacus in metus commodo porta vitae sed massa. Morbi
                efficitur molestie massa at fringilla. Nullam ac sollicitudin enim. Vivamus non nibh a lectus
                tristique tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      , document.body)
  );
}

export default Modal;
