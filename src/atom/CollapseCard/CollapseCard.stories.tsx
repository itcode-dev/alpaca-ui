/**
 * CollapseCard Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:58
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import styles from '../../stories.module.scss';

import CollapseCard, { CollapseCardProps } from '.';

export default {
	component: CollapseCard,
	title: 'Atom/CollapseCard'
} as ComponentMeta<typeof CollapseCard>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {CollapseCardProps} args: CollapseCardProps 인터페이스
 *
 * @returns {ComponentStory<typeof CollapseCard>} ComponentStory 객체
 */
function getTemplate(args: CollapseCardProps): ComponentStory<typeof CollapseCard>
{
	return (
		<section className={cn('root', args.theme)}>
			<div className={cn('row')}>
				<CollapseCard {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	border: 'flat',
	children: 'Button',
	color: 'basic',
	disabled: false,
	theme: 'light'
} as CollapseCardProps;