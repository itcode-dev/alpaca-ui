/**
 * AccordionBody 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.29 Fri 02:07:41
 */

import styles from '@alpaca/atom/Accordion/Accordion.module.scss';
import { AccordionBodyProps } from '@alpaca/atom/Accordion/AccordionBody.types';
import { slide, AccordionContext } from '@alpaca/common';
import classNames from 'classnames/bind';
import { useContext, useEffect, useRef } from 'react';

export default function AccordionBody({ className, ...props }: AccordionBodyProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const { isOpen } = useContext(AccordionContext);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() =>
	{
		const { current } = ref;

		// 태그가 유효할 경우
		if (current)
		{
			slide(current, isOpen);
		}
	}, [ isOpen ]);

	return (
		<div className={cn('accordion-body-wrapper')} data-component='AccordionBody' ref={ref} {...(props.id && { id: `${props.id}-wrapper` })}>
			<div className={cn('accordion-body', className)} {...props} />
		</div>
	);
}