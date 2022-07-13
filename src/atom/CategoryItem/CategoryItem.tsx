/**
 * 카테고리 아이템 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 00:11:33
 */

import classNames from 'classnames/bind';
import { MouseEvent, useEffect, useState } from 'react';
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
export default function CategoryItem({ category, name, image, count, simplify, isCheck, onClick, ...props }: CategoryItemProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const [ isChecked, setChecked ] = useState<boolean | undefined>(isCheck);

	useEffect(() =>
	{
		setChecked(isCheck);
	}, [ isCheck, setChecked ]);

	// 카테고리 아이템 클릭 시 체크 on/off 이벤트
	const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) =>
	{
		setChecked(isChecked === undefined ? true : !isChecked);

		// 클릭 이벤트가 있을 경우
		if (onClick)
		{
			onClick(e);
		}
	};

	return (
		<button className={cn('category-item')} data-category={category} data-name='CategoryItem' onClick={handleClick} {...props}>
			<img alt={category} className={cn('image')} src={image} />

			{simplify ? null : (
				<div className={cn('meta')}>
					<p>{name || category}</p>
					<p>{count}</p>
				</div>
			)}

			<div className={cn('check', { checked: isChecked })}>
				<FaCheck color='white' />
			</div>
		</button>
	);
}