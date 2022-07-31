/**
 * Category 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.14 Thu 14:48:12
 */

import classNames from 'classnames/bind';
import { CSSProperties, useState } from 'react';

import styles from './Category.module.scss';
import { CategoryProps } from './Category.types';

import Accordion from '../../atom/Accordion';
import CategoryItem from '../../atom/CategoryItem';
import { CategoryItemProps } from '../../atom/CategoryItem/CategoryItem.types';

/**
 * Category 컴포넌트 JSX 반환 메서드
 *
 * @param {CategoryProps} param0: CategoryProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Category({ column, list, useRefresh, refreshImageUrl, onSelectCategory, onRefreshCategory, className, ...props }: CategoryProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const [ categoryList, setCategoryList ] = useState(list);

	const categories = categoryList?.map((item, idx) => (
		<CategoryItem key={`category-item-${idx + 1}`} onSelect={(checked) => handleSelect(checked, item)} {...item} />
	)) || (
		<p>경고</p>
	);

	// 카테고리 초기화 이벤트
	const handleRefresh = () =>
	{
		const temp = categoryList.slice();

		temp.forEach((item) =>
		{
			item.checked = false;
		});

		setCategoryList(temp);

		// onSelectCategory 프로퍼티가 유효할 경우
		if (onSelectCategory)
		{
			onRefreshCategory([]);
		}
	};

	// 카테고리 선택 이벤트
	const handleSelect = (checked: boolean, category: CategoryItemProps) =>
	{
		const temp = categoryList.slice();

		temp.forEach((item) =>
		{
			// 선택한 카테고리일 경우
			if (item.category === category.category)
			{
				item.checked = !item.checked;
			}
		});

		setCategoryList(temp);

		// onSelectCategory 프로퍼티가 유효할 경우
		if (onSelectCategory)
		{
			onSelectCategory(temp.filter((item) => item.checked));
		}
	};

	const style: CSSProperties = { gridTemplateColumns: `repeat(${column}, 1fr)` };

	return (
		<Accordion className={cn(className)} data-component='Category' {...props}>
			<div className={cn('category-wrapper')} style={style}>
				{useRefresh ? (
					<CategoryItem category='All' count={Array.isArray(categoryList) ? categoryList.reduce((acc, cur) => (acc += cur.count), 0) : 0} image={refreshImageUrl || 'https://user-images.githubusercontent.com/50317129/168414052-ca399b9e-11f3-417b-bf0e-b68b2eb69182.png'} refresh onSelect={handleRefresh} />
				) : null}
				{categories}
			</div>
		</Accordion>
	);
}