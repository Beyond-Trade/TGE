/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { BigNumber } from 'bignumber.js'

export interface OwnableContract extends Truffle.Contract<OwnableInstance> {
	'new'(meta?: Truffle.TransactionDetails): Promise<OwnableInstance>
}

export interface OwnershipTransferred {
	name: 'OwnershipTransferred'
	args: {
		previousOwner: string
		newOwner: string
	}
}

type AllEvents = OwnershipTransferred

export interface OwnableInstance extends Truffle.ContractInstance {
	/**
	 * Returns the address of the current owner.
	 */
	owner(txDetails?: Truffle.TransactionDetails): Promise<string>

	/**
	 * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
	 */
	renounceOwnership: {
		(txDetails?: Truffle.TransactionDetails): Promise<Truffle.TransactionResponse<AllEvents>>
		call(txDetails?: Truffle.TransactionDetails): Promise<void>
		sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>
		estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>
	}

	/**
	 * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
	 */
	transferOwnership: {
		(newOwner: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<Truffle.TransactionResponse<AllEvents>>
		call(newOwner: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<void>
		sendTransaction(newOwner: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<string>
		estimateGas(newOwner: string | BigNumber, txDetails?: Truffle.TransactionDetails): Promise<number>
	}
}
