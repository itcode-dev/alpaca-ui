/**
 * ModalHeader 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 00:57:53
 */

import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import { ModalHeaderProps } from './ModalHeader.types';

/**
 * ModalHeader 컴포넌트 JSX 반환 메서드
 *
 * @param {ModalFooterProps} param0: ModalHeaderProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function ModalHeader({ className, ...props }: ModalHeaderProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn('modal-header', className)} data-component='ModalHeader' {...props} />
	);
}