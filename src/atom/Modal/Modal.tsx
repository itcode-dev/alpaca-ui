/**
 * Modal 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 00:45:00
 */

import classNames from 'classnames/bind';
import { MouseEvent, useCallback, useContext, useEffect } from 'react';

import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

import { AlpacaContext, ModalContext } from '../../common';

/**
 * Modal 컴포넌트 JSX 반환 메서드
 *
 * @param {ModalProps} param0: ModalProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Modal({ dimmed, forced, open, theme, className, onClick, ...props }: ModalProps): JSX.Element
{
	const { id } = props;

	const cn = classNames.bind(styles);

	const { theme: ctxTheme } = useContext(AlpacaContext);
	const { isOpen, setOpen } = useContext(ModalContext);

	useEffect(() =>
	{
		if (setOpen)
		{
			setOpen(open);
		}
	}, [ open, setOpen ]);

	const handleWrapperClick = useCallback(() =>
	{
		// 선택 강제가 아닐 경우
		if (!forced && setOpen)
		{
			setOpen(false);
		}
	}, [ forced, setOpen ]);

	const handleModalClick = useCallback((e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
	{
		e.stopPropagation();

		// onClick 메서드가 유효할 경우
		if (onClick)
		{
			onClick(e);
		}
	}, [ onClick ]);

	return (
		<div
			data-component='Modal'
			className={cn('modal-wrapper', {
				close: !isOpen,
				dimmed,
				open: isOpen
			})}
			onClick={handleWrapperClick}
			{...(id && { id: `${id}-wrapper` })}
		>
			<div className={cn('modal', theme || ctxTheme || 'light', className)} onClick={handleModalClick} {...props} />
		</div>
	);
}