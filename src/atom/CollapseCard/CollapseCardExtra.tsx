/**
 * CollapseCardExtra 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.01 Mon 13:21:11
 */

import classNames from 'classnames/bind';
import { useContext, useEffect, useRef } from 'react';

import styles from './CollapseCard.module.scss';
import { CollapseCardExtraProps } from './CollapseCardExtra.types';

import { slide, CollapseCardContext, NullableJSX } from '../../common';

/**
 * CollapseCardExtra 컴포넌트 JSX 반환 메서드
 *
 * @param {CollapseCardExtraProps} param0: CollapseCardExtraProps 인터페이스
 *
 * @returns {NullableJSX} JSX
 */
export default function CollapseCardExtra({ className, ...props }: CollapseCardExtraProps): NullableJSX
{
	const cn = classNames.bind(styles);

	const { value } = useContext(CollapseCardContext);

	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() =>
	{
		const { current } = ref;

		if (current)
		{
			slide(current, value?.isOpen);
		}
	}, [ value ]);

	return value?.mode === 'extra' ? (
		<div className={cn('collapse-card-extra-wrapper')} data-component='CollapseCardExtra' ref={ref}>
			<div className={cn('collapse-card-extra', className)} {...props} />
		</div>
	) : null;
}