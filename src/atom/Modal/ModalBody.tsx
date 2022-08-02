/**
 * ModalBody 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 01:11:07
 */

import classNames from 'classnames/bind';

import styles from './Modal.module.scss';
import { ModalBodyProps } from './ModalBody.types';

export default function ModalBody({ className, ...props }: ModalBodyProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn('modal-body', className)} data-component='ModalBody' {...props} />
	);
}