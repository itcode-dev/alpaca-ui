/**
 * Modal 컴포넌트 인덱스 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 01:06:43
 */

import Modal from '@alpaca/atom/Modal/Modal';
import ModalBody from '@alpaca/atom/Modal/ModalBody';
import ModalFooter from '@alpaca/atom/Modal/ModalFooter';
import ModalHeader from '@alpaca/atom/Modal/ModalHeader';

export default Object.assign(Modal, {
	Body: ModalBody,
	Footer: ModalFooter,
	Header: ModalHeader
});

export * from '@alpaca/atom/Modal/Modal.types';
export * from '@alpaca/atom/Modal/ModalBody.types';
export * from '@alpaca/atom/Modal/ModalFooter.types';
export * from '@alpaca/atom/Modal/ModalHeader.types';