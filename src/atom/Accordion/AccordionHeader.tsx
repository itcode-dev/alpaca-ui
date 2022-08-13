/**
 * AccordionHeader 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.27 Wed 22:27:51
 */

import classNames from 'classnames/bind';
import { useContext } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import styles from './Accordion.module.scss';
import { AccordionHeaderProps } from './AccordionHeader.types';

import { AccordionContext } from '../../common';

/**
 * AccordionHeader 컴포넌트 JSX 반환 메서드
 *
 * @param {AccordionHeaderProps} param0: AccordionHeaderProps
 *
 * @returns {JSX.Element} JSX
 */
export default function AccordionHeader({ direction, className, children, ...props }: AccordionHeaderProps): JSX.Element
{
	const { isOpen, setOpen } = useContext(AccordionContext);
	const cn = classNames.bind(styles);

	const svg = (
		<div className={cn('accordion-svg')}>
			<IoMdArrowDropdown />
		</div>
	);

	return (
		<button className={cn('accordion-header', className)} data-component='AccordionHeader' onClick={() => setOpen && setOpen(!isOpen)} {...props}>
			{direction === 'right' ? null : svg}

			<div className={cn('accordion-title')}>{children}</div>

			{direction === 'right' ? svg : null}
		</button>
	);
}