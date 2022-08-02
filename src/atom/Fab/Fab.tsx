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

import { AlpacaContext } from '../../common/context';

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

	const { theme: ctxTheme } = useContext(AlpacaContext);

	// style이 유효할 경우
	if (style)
	{
		style.top = top;
		style.bottom = bottom;
		style.left = left;
		style.right = right;
	}

	// 아닐 경우
	else
	{
		style = {
			bottom,
			left,
			right,
			top
		};
	}

	return (
		<button className={cn('fab', theme || ctxTheme || 'light')} data-component='Fab' style={style} {...props} />
	);
}