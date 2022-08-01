/**
 * CollapseCard 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.24 Sun 02:16:04
 */

import classNames from 'classnames/bind';
import { useContext, useEffect, useMemo, useState } from 'react';

import styles from './CollapseCard.module.scss';
import { CollapseCardProps } from './CollapseCard.types';

import { AlpacaContext, CollapseCardContext, CollapseCardContextProps, CollapseCardValueProps } from '../../common/context';

/**
 * CollapseCard 컴포넌트 JSX 반환 메서드
 *
 * @param {CollapseCardProps} param0: CollapseCardProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function CollapseCard({ mode, isOpen, theme, className, ...props }: CollapseCardProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const { theme: ctxTheme } = useContext(AlpacaContext);

	const [ value, setValue ] = useState<CollapseCardValueProps>({
		isOpen,
		mode
	});

	const ctxMemo = useMemo<CollapseCardContextProps>(() => ({
		setValue,
		value
	}), [ value, setValue ]);

	const { setValue: setValueMemo } = ctxMemo;

	useEffect(() =>
	{
		// setValueMemo 메서드가 유효할 경우
		if (setValueMemo)
		{
			setValueMemo({
				isOpen,
				mode
			});
		}
	}, [ isOpen, mode, setValueMemo ]);

	return (
		<CollapseCardContext.Provider value={ctxMemo}>
			<div className={cn('collapse-card', theme || ctxTheme || 'light', className)} data-component='CollapseCard' {...props} />
		</CollapseCardContext.Provider>
	);
}