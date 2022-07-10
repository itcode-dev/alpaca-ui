/**
 * Input Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 01:45:56
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';
import { MdInfoOutline, MdOutlineFileDownloadDone, MdSearch } from 'react-icons/md';

import { InputProps } from './Input.types';

import styles from '../../stories.module.scss';

import Input from '.';

export default {
	component: Input,
	title: 'Atom/Input'
} as ComponentMeta<typeof Input>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {InputProps} args: InputProps 인터페이스
 *
 * @returns {ComponentStory<typeof Input>} ComponentStory 객체
 */
function getTemplate(args: InputProps): ComponentStory<typeof Input>
{
	return (
		<section className={cn('root', args.theme)}>
			<div className={cn('row')}>
				<Input {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	border: 'flat',
	disabled: false,
	required: false,
	theme: 'light'
} as InputProps;

/**
 * 테두리 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Border(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Input border='flat' />
				</div>

				<div className={cn('row')}>
					<Input border='round' />
				</div>

				<div className={cn('row')}>
					<Input border='circle' />
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Input border='flat' theme='dark' />
				</div>

				<div className={cn('row')}>
					<Input border='round' theme='dark' />
				</div>

				<div className={cn('row')}>
					<Input border='circle' theme='dark' />
				</div>
			</div>
		</section>
	);
}

/**
 * 아이콘 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Icon(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Input icon={<MdSearch />} />
				</div>

				<div className={cn('row')}>
					<Input icon={<MdInfoOutline />} />
				</div>

				<div className={cn('row')}>
					<Input icon={<MdOutlineFileDownloadDone />} />
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Input icon={<MdSearch />} theme='dark' />
				</div>

				<div className={cn('row')}>
					<Input icon={<MdInfoOutline />} theme='dark' />
				</div>

				<div className={cn('row')}>
					<Input icon={<MdOutlineFileDownloadDone />} theme='dark' />
				</div>
			</div>
		</section>
	);
}