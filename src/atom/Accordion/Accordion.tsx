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

export default function Accordion({ title, open, direction = 'left', transparent, theme, children, className, ...props }: AccordionProps): JSX.Element
{
	const cn = classNames.bind(styles);
	const ctx = useContext(Context);

	const [ isOpen, setOpen ] = useState<boolean | undefined>(open);

	useEffect(() =>
	{
		setOpen(open);
	}, [ open ]);

	return (
		<div
			data-name='Accordion'
			className={cn('accordion', theme || ctx?.theme || 'light', {
				direction,
				open: isOpen,
				transparent
			}, className)}
			{...props}
		>
			<button>
				{direction === 'left' ? (
					<div>
						<IoMdArrowDropdown />
					</div>
				) : null}

				<div>{title}</div>

				{direction === 'right' ? null : (
					<div>
						<IoMdArrowDropdown />
					</div>
				)}
			</button>

			<div>
				{children}
			</div>
		</div>
	);
}