/**
 * 카테고리 아이템 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 00:11:33
 */

import classNames from 'classnames/bind';
import { FaCheck } from 'react-icons/fa';

import styles from './CategoryItem.module.scss';
import { CategoryItemProps } from './CategoryItem.types';

/**
 * 카테고리 아이템 컴포넌트 JSX 반환 메서드
 *
 * @param {CategoryItemProps} props: CategoryItemProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function CategoryItem({ category, name, image, count, simplify, isCheck, ...props }: CategoryItemProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<button className={cn('category-item')} data-category={category} data-name='CategoryItem' {...props}>
			<img alt={category} className={cn('image')} src={image} />

			{simplify ? null : (
				<div className={cn('meta')}>
					<p>{name || category}</p>
					<p>{count}</p>
				</div>
			)}

			<div className={cn('check', { checked: isCheck })}>
				<FaCheck color='white' />
			</div>
		</button>
	);
}