/**
 * Button Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:58
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import styles from '../../stories.module.scss';

import Button, { ButtonProps } from '.';

export default {
	component: Button,
	title: 'Atom/Button'
} as ComponentMeta<typeof Button>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {ButtonProps} args: ButtonProps 인터페이스
 *
 * @returns {ComponentStory<typeof Button>} ComponentStory 객체
 */
function getTemplate(args: ButtonProps): ComponentStory<typeof Button>
{
	return (
		<section className={cn('root', args.theme)}>
			<div className={cn('row')}>
				<Button {...args} />
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
} as ButtonProps;

/**
 * 테두리 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Border(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Button border='flat'>flat</Button>
				<Button border='round'>round</Button>
				<Button border='circle'>circle</Button>
			</div>
		</section>
	);
}

/**
 * 컬러 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Color(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Button color='basic'>basic</Button>
					<Button color='primary'>primary</Button>
					<Button color='submit'>submit</Button>
					<Button color='warn'>warn</Button>
					<Button color='error'>error</Button>
					<Button color='dark'>dark</Button>
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Button color='basic' theme='dark'>basic</Button>
					<Button color='primary' theme='dark'>primary</Button>
					<Button color='submit' theme='dark'>submit</Button>
					<Button color='warn' theme='dark'>warn</Button>
					<Button color='error' theme='dark'>error</Button>
					<Button color='dark' theme='dark'>dark</Button>
				</div>
			</div>
		</section>
	);
}

/**
 * 비활성화 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Disabled(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Button border='flat' disabled>flat disabled</Button>
				<Button color='submit' disabled>submit disabled</Button>
				<Button border='circle' color='primary' disabled>circle primary disabled</Button>
			</div>
		</section>
	);
}

/**
 * 로딩 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Loading(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Button loading>Loading</Button>
			</div>
		</section>
	);
}