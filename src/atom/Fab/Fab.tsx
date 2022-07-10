/**
 * Fab 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 18:24:43
 */

import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Fab.module.scss';
import { FabProps } from './Fab.types';

import { Context } from '../../common/context';

/**
 * Fab 컴포넌트 JSX 반환 메서드
 *
 * @param {FabProps} param0: FabProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Fab({ top, bottom, left, right, theme, style, ...props }: FabProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const ctx = useContext(Context);

	const customStyle = style || {};

	// top이 유효할 경우
	if (top)
	{
		customStyle.top = top;
	}

	// bottom이 유효할 경우
	if (bottom)
	{
		customStyle.bottom = bottom;
	}

	// left가 유효할 경우
	if (left)
	{
		customStyle.left = left;
	}

	// right가 유효할 경우
	if (right)
	{
		customStyle.right = right;
	}

	return (
		<button className={cn('fab', theme || ctx?.theme || 'light')} style={customStyle} {...props} />
	);
}