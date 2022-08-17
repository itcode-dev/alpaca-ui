/**
 * HeadingText 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.17 Wed 00:33:27
 */

import classNames from 'classnames/bind';

import styles from './HeadingText.module.scss';
import { HeadingTextProps } from './HeadingText.types';

/**
 * HeadingText 컴포넌트 JSX 반환 메서드
 *
 * @param {HeadingTextProps} param0: HeadingTextProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function HeadingText({ level = 'h1', className, children, ...props }: HeadingTextProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const cls = cn('heading-text', level, className);

	switch (level)
	{
		case 'h2':
			return (
				<h2 className={cls} data-component='HeadingText' {...props}>{children}</h2>
			);

		case 'h3':
			return (
				<h3 className={cls} data-component='HeadingText' {...props}>{children}</h3>
			);

		case 'h4':
			return (
				<h4 className={cls} data-component='HeadingText' {...props}>{children}</h4>
			);

		case 'h5':
			return (
				<h5 className={cls} data-component='HeadingText' {...props}>{children}</h5>
			);

		case 'h6':
			return (
				<h6 className={cls} data-component='HeadingText' {...props}>{children}</h6>
			);

		default:
			return (
				<h1 className={cls} data-component='HeadingText' {...props}>{children}</h1>
			);
	}
}