/**
 * Modal 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 00:45:00
 */

import classNames from 'classnames/bind';
import { MouseEvent, useCallback, useContext, useEffect, useMemo, useState } from 'react';

import styles from './Modal.module.scss';
import { ModalProps } from './Modal.types';

import { AlpacaContext, ModalContext, ModalContextProps } from '../../common/context';

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

	const [ isOpen, setOpen ] = useState<boolean | undefined>(open);

	const valueMemo = useMemo<ModalContextProps>(() => ({
		isOpen,
		setOpen
	}), [ isOpen, setOpen ]);

	const { isOpen: isOpenMemo, setOpen: setOpenMemo } = valueMemo;

	useEffect(() =>
	{
		setOpenMemo(open);
	}, [ open, setOpenMemo ]);

	const handleWrapperClick = useCallback(() =>
	{
		// 선택 강제가 아닐 경우
		if (!forced)
		{
			setOpenMemo(false);
		}
	}, [ forced, setOpenMemo ]);

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
		<ModalContext.Provider value={valueMemo}>
			<div
				data-component='Modal'
				className={cn('modal-wrapper', {
					close: !isOpenMemo,
					dimmed,
					open: isOpenMemo
				})}
				onClick={handleWrapperClick}
				{...(id && { id: `${id}-wrapper` })}
			>
				<div className={cn('modal', theme || ctxTheme || 'light', className)} onClick={handleModalClick} {...props} />
			</div>
		</ModalContext.Provider>
	);
}