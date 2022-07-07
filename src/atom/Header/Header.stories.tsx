/**
 * 헤더 Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.06 Wed 00:05:36
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import { HeaderProps } from './Header.types';

import AlpacaProvider from '../AlpacaProvider';

import Header from '.';

export default {
	component: Header,
	title: 'Atom/Header'
} as ComponentMeta<typeof Header>;

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
		<Header {...args} />
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: 'Header Test',
	theme: 'light',
	transparent: false
} as HeaderProps;

export function Light(): JSX.Element
{
	return (
		<AlpacaProvider>
			<Header>
				<h1>Header Light Theme</h1>
			</Header>
		</AlpacaProvider>
	);
}

export function Dark(): JSX.Element
{
	return (
		<AlpacaProvider value={{ theme: 'dark' }}>
			<Header>
				<h1>Header Dark Theme</h1>
			</Header>
		</AlpacaProvider>
	);
}

export function LightTransparent(): JSX.Element
{
	return (
		<AlpacaProvider>
			<Header transparent>
				<h1>Header Light Transparent Theme</h1>
			</Header>
		</AlpacaProvider>
	);
}

export function DarkTransparent(): JSX.Element
{
	return (
		<AlpacaProvider value={{ theme: 'dark' }}>
			<Header transparent>
				<h1>Header Dark Transparent Theme</h1>
			</Header>
		</AlpacaProvider>
	);
}