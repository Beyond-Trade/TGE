/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { BigNumber } from 'bignumber.js'

export interface ManageAddressContract extends Truffle.Contract<ManageAddressInstance> {
	'new'(meta?: Truffle.TransactionDetails): Promise<ManageAddressInstance>
}

export interface Deposit {
	name: 'Deposit'
	args: {
		_sender: string
		amount: BigNumber
	}
}

export interface TokenBurn {
	name: 'TokenBurn'
	args: {
		from: string
		value: BigNumber
	}
}

export interface Transfer {
	name: 'Transfer'
	args: {
		from: string
		to: string
		value: BigNumber
	}
}

type AllEvents = Deposit | TokenBurn | Transfer

export interface ManageAddressInstance extends Truffle.ContractInstance {
	allowedAddress(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<boolean>

	balanceOf(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	blockedAddress(arg0: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<boolean>

	decimals(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	name(txDetails?: Truffle.TransactionDetails): Promise<string>

	owner(txDetails?: Truffle.TransactionDetails): Promise<string>

	symbol(txDetails?: Truffle.TransactionDetails): Promise<string>

	totalSupply(txDetails?: Truffle.TransactionDetails): Promise<BigNumber>

	add_allowedAddress: {
		(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<Truffle.TransactionResponse<AllEvents>>
		call(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<void>
		sendTransaction(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<string>
		estimateGas(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<number>
	}

	delete_allowedAddress: {
		(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<Truffle.TransactionResponse<AllEvents>>
		call(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<void>
		sendTransaction(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<string>
		estimateGas(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<number>
	}

	add_blockedAddress: {
		(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<Truffle.TransactionResponse<AllEvents>>
		call(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<void>
		sendTransaction(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<string>
		estimateGas(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<number>
	}

	delete_blockedAddress: {
		(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<Truffle.TransactionResponse<AllEvents>>
		call(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<void>
		sendTransaction(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<string>
		estimateGas(_address: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<number>
	}
}
