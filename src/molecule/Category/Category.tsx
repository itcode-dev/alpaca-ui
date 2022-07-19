/**
 * 카테고리 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.14 Thu 14:48:12
 */

import classNames from 'classnames/bind';
import { useState } from 'react';

import styles from './Category.module.scss';
import { CategoryProps } from './Category.types';

import Accordion from '../../atom/Accordion';
import CategoryItem from '../../atom/CategoryItem';
import { CategoryItemProps } from '../../atom/CategoryItem/CategoryItem.types';

/**
 * 카테고리 컴포넌트 JSX 반환 메서드
 *
 * @param {CategoryProps} param0: CategoryProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Category({ list, useRefresh, onSelectCategory, ...props }: CategoryProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const [ categoryList, setCategoryList ] = useState(list);

	const categories = categoryList?.map((item, idx) => (
		<CategoryItem key={`category-item-${idx + 1}`} onSelect={(isCheck) => handleSelect(isCheck, item)} {...item} />
	)) || (
		<p>경고</p>
	);

	// 카테고리 초기화 이벤트
	const handleRefresh = () =>
	{
		const temp = categoryList.slice();

		temp.forEach((item) =>
		{
			item.isCheck = false;
		});

		setCategoryList(temp);

		// onSelectCategory 프로퍼티가 유효할 경우
		if (onSelectCategory)
		{
			onSelectCategory([]);
		}
	};

	// 카테고리 선택 이벤트
	const handleSelect = (isCheck: boolean, category: CategoryItemProps) =>
	{
		const temp = categoryList.slice();

		temp.forEach((item) =>
		{
			// 선택한 카테고리일 경우
			if (item.category === category.category)
			{
				item.isCheck = !item.isCheck;
			}
		});

		setCategoryList(temp);

		// onSelectCategory 프로퍼티가 유효할 경우
		if (onSelectCategory)
		{
			onSelectCategory(temp.filter((item) => item.isCheck));
		}
	};

	return (
		<Accordion {...props}>
			<div className={cn('category-wrapper')}>
				{useRefresh ? (
					<CategoryItem category='All' count={Array.isArray(categoryList) ? categoryList.reduce((acc, cur) => (acc += cur.count), 0) : 0} refresh onSelect={handleRefresh} />
				) : null}
				{categories}
			</div>
		</Accordion>
	);
}