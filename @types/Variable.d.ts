/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { BigNumber } from 'bignumber.js'

export interface VariableContract extends Truffle.Contract<VariableInstance> {
	'new'(meta?: Truffle.TransactionDetails): Promise<VariableInstance>
}

type AllEvents = never

export interface VariableInstance extends Truffle.ContractInstance {
	allowedAddress(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<boolean>

	balanceOf(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	blockedAddress(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<boolean>

	decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	lockAmount(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	name(txDetails?: Truffle.TransactionDetails): Promise<string>

	owner(txDetails?: Truffle.TransactionDetails): Promise<string>

	symbol(txDetails?: Truffle.TransactionDetails): Promise<string>

	totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>
}
