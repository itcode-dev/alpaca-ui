/**
 * Accordion 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 17:13:22
 */

import classNames from 'classnames/bind';
import { useContext, useEffect, useMemo, useState } from 'react';

import styles from './Accordion.module.scss';
import { AccordionProps } from './Accordion.types';

import { AccordionContext, AccordionContextProps, AlpacaContext } from '../../common';

/**
 * Accordion 컴포넌트 JSX 반환 메서드
 *
 * @param {AccordionProps} props: AccordionProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Accordion({ open, transparent, round, theme, className, ...props }: AccordionProps): JSX.Element
{
	const cn = classNames.bind(styles);
	const { theme: ctxTheme } = useContext(AlpacaContext);

	const [ isOpen, setOpen ] = useState<boolean | undefined>(open);

	const valueMemo = useMemo<AccordionContextProps>(() => ({
		isOpen,
		setOpen
	}), [ isOpen, setOpen ]);

	const { isOpen: isOpenMemo, setOpen: setOpenMemo } = valueMemo;

	useEffect(() =>
	{
		if (setOpenMemo)
		{
			setOpenMemo(open);
		}
	}, [ open, setOpenMemo ]);

	return (
		<AccordionContext.Provider value={valueMemo}>
			<div
				data-component='Accordion'
				className={cn('accordion', theme || ctxTheme || 'light', {
					close: !isOpenMemo,
					open: isOpenMemo,
					round,
					transparent
				}, className)}
				{...props}
			/>
		</AccordionContext.Provider>
	);
}