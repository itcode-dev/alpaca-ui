/**
 * Stack Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.10 Wed 00:19:22
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import { StackProps } from './Stack.types';

import styles from '../../stories.module.scss';

import Stack from '.';

export default {
	component: Stack,
	title: 'Atom/Stack'
} as ComponentMeta<typeof Stack>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {StackProps} args: StackProps 인터페이스
 *
 * @returns {ComponentStory<typeof Stack>} ComponentStory 객체
 */
function getTemplate(args: StackProps): ComponentStory<typeof Stack>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Stack {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: (
		<>
			<div
				style={{
					backgroundColor: 'red',
					height: 100,
					width: 100
				}}
			/>
			<div
				style={{
					backgroundColor: 'orange',
					height: 100,
					width: 100
				}}
			/>
			<div
				style={{
					backgroundColor: 'yellow',
					height: 100,
					width: 100
				}}
			/>
			<div
				style={{
					backgroundColor: 'green',
					height: 100,
					width: 100
				}}
			/>
			<div
				style={{
					backgroundColor: 'blue',
					height: 100,
					width: 100
				}}
			/>
			<div
				style={{
					backgroundColor: 'indigo',
					height: 100,
					width: 100
				}}
			/>
			<div
				style={{
					backgroundColor: 'purple',
					height: 100,
					width: 100
				}}
			/>
		</>
	),
	direction: 'vertical'
} as StackProps;

export function Direction(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<Stack>
				<div
					style={{
						backgroundColor: 'red',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'orange',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'yellow',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'green',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'blue',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'indigo',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'purple',
						height: 100,
						width: 100
					}}
				/>
			</Stack>

			<Stack direction='vertical'>
				<div
					style={{
						backgroundColor: 'red',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'orange',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'yellow',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'green',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'blue',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'indigo',
						height: 100,
						width: 100
					}}
				/>
				<div
					style={{
						backgroundColor: 'purple',
						height: 100,
						width: 100
					}}
				/>
			</Stack>
		</section>
	);
}

export function Depth(): JSX.Element
{
	return (
		<Stack direction='vertical'>
			<div
				style={{
					backgroundColor: 'red',
					height: 50,
					width: 200
				}}
			/>
			<div
				style={{
					backgroundColor: 'orange',
					height: 50,
					width: 200
				}}
			/>
			<div
				style={{
					backgroundColor: 'yellow',
					height: 50,
					width: 200
				}}
			/>
			<div
				style={{
					backgroundColor: 'green',
					height: 50,
					width: 200
				}}
			/>
			<div
				style={{
					backgroundColor: 'blue',
					height: 50,
					width: 200
				}}
			/>

			<Stack>
				<div
					style={{
						backgroundColor: 'grey',
						height: 50,
						width: 100
					}}
				/>

				<div
					style={{
						backgroundColor: 'gainsboro',
						height: 50,
						width: 100
					}}
				/>
			</Stack>

			<div
				style={{
					backgroundColor: 'indigo',
					height: 50,
					width: 200
				}}
			/>
			<div
				style={{
					backgroundColor: 'purple',
					height: 50,
					width: 200
				}}
			/>
		</Stack>
	);
}