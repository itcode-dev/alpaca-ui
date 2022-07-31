/**
 * Header Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.06 Wed 00:05:36
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import styles from '../../stories.module.scss';

import Header, { HeaderProps } from '.';

export default {
	component: Header,
	title: 'Atom/Header'
} as ComponentMeta<typeof Header>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {HeaderProps} args: HeaderProps 인터페이스
 *
 * @returns {ComponentStory<typeof Header>} ComponentStory 객체
 */
function getTemplate(args: HeaderProps): ComponentStory<typeof Header>
{
	return (
		<section className={cn('root', args.theme, 'header')}>
			<Header {...args} />
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: 'Header Test',
	theme: 'light',
	transparent: false
} as HeaderProps;

/**
 * 투명 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Transparent(): JSX.Element
{
	return (
		<section>
			<div className={cn('root', 'header')}>
				<Header transparent>
					<h1>Header Light Transparent Theme</h1>
				</Header>
			</div>

			<div className={cn('root', 'dark', 'header')}>
				<Header theme='dark' transparent>
					<h1>Header Dark Transparent Theme</h1>
				</Header>
			</div>
		</section>
	);
}