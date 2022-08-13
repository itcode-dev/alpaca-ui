/**
 * Input Storybook 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 01:45:56
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useContext, useEffect } from 'react';
import { MdInfoOutline, MdOutlineFileDownloadDone, MdSearch } from 'react-icons/md';

import { InputProps } from './Input.types';

import { AlpacaContext } from '../../common';
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
 * @param {InputProps} param0: InputProps 인터페이스
 *
 * @returns {ComponentStory<typeof Input>} ComponentStory 객체
 */
function getTemplate({ theme, ...props }: InputProps): ComponentStory<typeof Input>
{
	const { setTheme } = useContext(AlpacaContext);

	useEffect(() =>
	{
		// setTheme 메서드가 유효할 경우
		if (setTheme)
		{
			setTheme(theme);
		}
	}, [ theme ]);

	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Input {...props} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	border: 'flat',
	disabled: false,
	required: false,
	theme: 'light',
	type: 'text'
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
 * 비활성화 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Disabled(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Input border='flat' disabled />
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Input border='flat' theme='dark' disabled />
				</div>
			</div>
		</section>
	);
}

/**
 * 에러 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Error(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Input border='flat' error />
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Input border='flat' theme='dark' error />
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

/**
 * 필수 조건 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Required(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Input border='flat' required />
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Input border='flat' theme='dark' required />
				</div>
			</div>
		</section>
	);
}

/**
 * 타입별 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Type(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Input border='flat' type='button' value='button' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='checkbox' value='button' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='color' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='date' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='datetime-local' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='email' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='file' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='hidden' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='image' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='month' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='number' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='password' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='radio' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='range' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='reset' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='search' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='submit' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='tel' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='text' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='time' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='url' />
				</div>

				<div className={cn('row')}>
					<Input border='flat' type='week' />
				</div>
			</div>
		</section>
	);
}