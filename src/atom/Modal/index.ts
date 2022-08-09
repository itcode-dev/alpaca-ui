/**
 * Modal 컴포넌트 인덱스 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 01:06:43
 */

import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export default Object.assign(Modal, {
	Body: ModalBody,
	Footer: ModalFooter,
	Header: ModalHeader
});