/**
 * 컨텍스트 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:44:22
 */

import { createContext } from 'react';

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

export const AlpacaContext = createContext<AlpacaContextProps>({ theme: undefined });

export const AccordionContext = createContext<AccordionContextProps>({ isOpen: undefined });