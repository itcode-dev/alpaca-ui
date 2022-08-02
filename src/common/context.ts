/**
 * 컨텍스트 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:44:22
 */

import { createContext } from 'react';

import { CollapseCardMode } from '../atom/CollapseCard';

export type Theme = 'light' | 'dark'

export interface AlpacaContextProps
{
	theme?: Theme
	setTheme?: (theme?: Theme) => {}
}

export interface AccordionContextProps
{
	isOpen?: boolean
	setOpen?: (isOpen?: boolean) => {}
}

export interface CollapseCardValueProps
{
	mode?: CollapseCardMode
	isOpen?: boolean
}

export interface CollapseCardContextProps
{
	value?: CollapseCardValueProps
	setValue?: (value?: CollapseCardValueProps) => {}
}

export interface ModalContextProps
{
	isOpen?: boolean
	setOpen?: (isOpen: boolean) => {}
}

export const AlpacaContext = createContext<AlpacaContextProps>({});

export const AccordionContext = createContext<AccordionContextProps>({});

export const CollapseCardContext = createContext<CollapseCardContextProps>({ value: undefined });

export const ModalContext = createContext<ModalContextProps>({});