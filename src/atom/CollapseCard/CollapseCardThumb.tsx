/**
 * CollapseCardThumb 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.01 Mon 11:41:03
 */

import styles from '@alpaca/atom/CollapseCard/CollapseCard.module.scss';
import { CollapseCardThumbProps } from '@alpaca/atom/CollapseCard/CollapseCardThumb.types';
import classNames from 'classnames/bind';

/**
 * CollapseCardThumb 컴포넌트 JSX 반환 메서드
 *
 * @param {CollapseCardThumbProps} param0: CollapseCardThumbProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function CollapseCardThumb({ image, className, ...props }: CollapseCardThumbProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<div className={cn('collapse-card-thumb', className)} data-component='CollapseCardThumb' {...props}>
			<img alt='thumbnail' src={image} />
		</div>
	);
}