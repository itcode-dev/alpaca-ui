/**
 * Accordion 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 17:13:22
 */

import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import styles from './Accordion.module.scss';
import { AccordionProps } from './Accordion.types';

import { Context } from '../../common/context';

/**
 * Accordion 컴포넌트 JSX 반환 메서드
 *
 * @param {AccordionProps} props: AccordionProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Accordion({ title, open, direction = 'left', transparent, round, theme, children, className, onClick, ...props }: AccordionProps): JSX.Element
{
	const cn = classNames.bind(styles);
	const ctx = useContext(Context);

	const [ isOpen, setOpen ] = useState<boolean | undefined>(open);

	useEffect(() =>
	{
		setOpen(open);
	}, [ open ]);

	const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
	{
		setOpen(!isOpen);

		if (onClick)
		{
			onClick(e);
		}
	};

	const svg = (
		<div className={cn('accordion-svg')}>
			<IoMdArrowDropdown />
		</div>
	);

	return (
		<div
			data-name='Accordion'
			className={cn('accordion', theme || ctx?.theme || 'light', {
				close: isOpen === false,
				direction,
				open: isOpen,
				round,
				transparent
			}, className)}
			{...props}
		>
			<button className={cn('accordion-button')} onClick={handleClick}>
				{direction === 'left' ? svg : null}

				<div className={cn('accordion-title')}>{title}</div>

				{direction === 'right' ? svg : null}
			</button>

			<div className={cn('accordion-body')}>
				{children}
			</div>
		</div>
	);
}