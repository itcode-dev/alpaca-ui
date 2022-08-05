/**
 * ModalBody 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 01:11:07
 */

import styles from '@alpaca/atom/Modal/Modal.module.scss';
import { ModalBodyProps } from '@alpaca/atom/Modal/ModalBody.types';
import classNames from 'classnames/bind';

/**
 * ModalBody 컴포넌트 JSX 반환 메서드
 *
 * @param {ModalBodyProps} param0: ModalBodyProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function ModalBody({ className, ...props }: ModalBodyProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn('modal-body', className)} data-component='ModalBody' {...props} />
	);
}