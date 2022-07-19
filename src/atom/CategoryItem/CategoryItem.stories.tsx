/**
 * 카테고리 아이템 Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 00:40:19
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import styles from '../../stories.module.scss';

import CategoryItem, { CategoryItemProps } from '.';

export default {
	component: CategoryItem,
	title: 'Atom/CategoryItem'
} as ComponentMeta<typeof CategoryItem>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {CategoryItemProps} args: CategoryItemProps 인터페이스
 *
 * @returns {ComponentStory<typeof CategoryItem>} ComponentStory 객체
 */
function getTemplate(args: CategoryItemProps): ComponentStory<typeof CategoryItem>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<div style={{ height: 256, width: 256 }}>
					<CategoryItem {...args} />
				</div>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	category: '카테고리',
	count: Math.ceil(Math.random() * 100),
	image: 'https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1',
	isCheck: false,
	name: '카테고리 설명',
	simplify: false
} as CategoryItemProps;

/**
 * 선택 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function IsCheck(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<div style={{ height: 256, width: 256 }}>
					<CategoryItem
						category='카테고리'
						count={Math.ceil(Math.random() * 100)}
						image='https://static-s.aa-cdn.net/img/gp/20600012710478/8HYiPrKqjM1eOBCAnYOkvZHfl1gho73lYeS0N3nC0Pu8VEclx4qBlqShfmyo7Mx7aA=s300?v=1'
						isCheck
					/>
				</div>
			</div>
		</section>
	);
}