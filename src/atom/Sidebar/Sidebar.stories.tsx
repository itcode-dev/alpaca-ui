/**
 * 사이드바 Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.08 Fri 01:35:44
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import { SidebarProps } from './Sidebar.types';

import styles from '../../stories.module.scss';

import Sidebar from '.';

export default {
	component: Sidebar,
	title: 'Atom/Sidebar'
} as ComponentMeta<typeof Sidebar>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {SidebarProps} args: SidebarProps 인터페이스
 *
 * @returns {ComponentStory<typeof Sidebar>} ComponentStory 객체
 */
function getTemplate(args: SidebarProps): ComponentStory<typeof Sidebar>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Sidebar {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: 'Sidebar Test',
	direction: 'left',
	open: undefined,
	size: 'normal',
	theme: 'light'
} as SidebarProps;