/**
 * ModalFooter 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 09:58:03
 */

import styles from '@alpaca/atom/Modal/Modal.module.scss';
import { ModalFooterProps } from '@alpaca/atom/Modal/ModalFooter.types';
import classNames from 'classnames/bind';

/**
 * ModalFooter 컴포넌트 JSX 반환 메서드
 *
 * @param {ModalFooterProps} param0: ModalFooterProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function ModalFooter({ className, ...props }: ModalFooterProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn('modal-footer', className)} data-component='ModalFooter' {...props} />
	);
}