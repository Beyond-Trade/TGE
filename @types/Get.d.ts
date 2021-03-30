/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { BigNumber } from 'bignumber.js'

export interface GetContract extends Truffle.Contract<GetInstance> {
	'new'(meta?: Truffle.TransactionDetails): Promise<GetInstance>
}

type AllEvents = never

export interface GetInstance extends Truffle.ContractInstance {
	allowedAddress(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<boolean>

	balanceOf(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	blockedAddress(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<boolean>

	decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	name(txDetails?: Truffle.TransactionDetails): Promise<string>

	owner(txDetails?: Truffle.TransactionDetails): Promise<string>

	symbol(txDetails?: Truffle.TransactionDetails): Promise<string>

	totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	get_transferLock(txDetails?: Truffle.TransactionDetails): Promise<boolean>

	get_blockedAddress(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<boolean>
}
