/**
 * CollapseCardBody 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.01 Mon 13:10:38
 */

import styles from '@alpaca/atom/CollapseCard/CollapseCard.module.scss';
import { CollapseCardBodyProps } from '@alpaca/atom/CollapseCard/CollapseCardBody.types';
import classNames from 'classnames/bind';

/**
 * CollapseCardBody 컴포넌트 JSX 반환 메서드
 *
 * @param {CollapseCardBodyProps} param0: CollapseCardBodyProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function CollapseCardBody({ className, ...props }: CollapseCardBodyProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn('collapse-card-body', className)} data-component='CollapseCardBody' {...props} />
	);
}