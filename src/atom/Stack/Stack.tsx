/**
 * Stack 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.10 Wed 00:06:30
 */

import classNames from 'classnames/bind';

import styles from './Stack.module.scss';
import { StackProps } from './Stack.types';

/**
 * Stack 컴포넌트 JSX 반환 메서드
 *
 * @param {StackProps} param0: StackProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Stack({ direction = 'horizontal', justifyContent, alignItems, gap, className, ...props }: StackProps): JSX.Element
{
	const { style } = props;

	const cn = classNames.bind(styles);

	// style 객체가 유효할 경우
	if (style)
	{
		props.style.justifyContent = justifyContent;
		props.style.alignItems = alignItems;
		props.style.gap = gap;
	}

	// 아닐 경우
	else
	{
		props.style = {
			alignItems,
			gap,
			justifyContent
		};
	}

	return (
		<div className={cn('stack', direction, className)} data-component='Stack' {...props} />
	);
}