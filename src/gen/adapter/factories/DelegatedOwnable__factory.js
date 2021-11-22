"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.DelegatedOwnable__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [
            {
                internalType: "address",
                name: "_firstOwnableParent",
                type: "address"
            },
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousParent",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "newParent",
                type: "address"
            },
        ],
        name: "ParentOwnerChanged",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_newParent",
                type: "address"
            },
        ],
        name: "changeOwnableParent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getOwner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];
var _bytecode = "0x608060405234801561001057600080fd5b5060405161053e38038061053e83398101604081905261002f9161010c565b806001600160a01b031663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b15801561006857600080fd5b505afa925050508015610098575060408051601f3d908101601f191682019092526100959181019061010c565b60015b6100bd5760405162461bcd60e51b81526004016100b49061013a565b60405180910390fd5b50600080546001600160a01b0319166001600160a01b03831690811782556040519091907ffca4bc097843727c93a8ab8d241a38481cccf8ec96dda1a342574712cfe8eb40908290a350610171565b60006020828403121561011d578081fd5b81516001600160a01b0381168114610133578182fd5b9392505050565b60208082526015908201527f504152454e54204953204e4f54204f574e41424c450000000000000000000000604082015260600190565b6103be806101806000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806389382ca01461003b578063893d20e814610050575b600080fd5b61004e610049366004610249565b61006e565b005b6100586101a3565b6040516100659190610288565b60405180910390f35b6100766101a3565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146100e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100da90610306565b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116610130576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100da906102a9565b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83811691821780845560405192939116917ffca4bc097843727c93a8ab8d241a38481cccf8ec96dda1a342574712cfe8eb409190a350565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663893d20e86040518163ffffffff1660e01b815260040160206040518083038186803b15801561020c57600080fd5b505afa158015610220573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610244919061026c565b905090565b60006020828403121561025a578081fd5b813561026581610363565b9392505050565b60006020828403121561027d578081fd5b815161026581610363565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b60208082526035908201527f44656c6567617465644f776e61626c65236368616e67654f776e61626c65506160408201527f72656e743a20494e56414c49445f414444524553530000000000000000000000606082015260800190565b6020808252602f908201527f44656c6567617465644f776e61626c65236f6e6c794f776e65723a2053454e4460408201527f45525f49535f4e4f545f4f574e45520000000000000000000000000000000000606082015260800190565b73ffffffffffffffffffffffffffffffffffffffff8116811461038557600080fd5b5056fea264697066735822122046192559cdf85db3e60c31b5486a778fe77c4567b35382eb1056e86e0590daa064736f6c63430007040033";
var isSuperArgs = function (xs) { return xs.length > 1; };
var DelegatedOwnable__factory = /** @class */ (function (_super) {
    __extends(DelegatedOwnable__factory, _super);
    function DelegatedOwnable__factory() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = this;
        if (isSuperArgs(args)) {
            _this = _super.apply(this, args) || this;
        }
        else {
            _this = _super.call(this, _abi, _bytecode, args[0]) || this;
        }
        return _this;
    }
    DelegatedOwnable__factory.prototype.deploy = function (_firstOwnableParent, overrides) {
        return _super.prototype.deploy.call(this, _firstOwnableParent, overrides || {});
    };
    DelegatedOwnable__factory.prototype.getDeployTransaction = function (_firstOwnableParent, overrides) {
        return _super.prototype.getDeployTransaction.call(this, _firstOwnableParent, overrides || {});
    };
    DelegatedOwnable__factory.prototype.attach = function (address) {
        return _super.prototype.attach.call(this, address);
    };
    DelegatedOwnable__factory.prototype.connect = function (signer) {
        return _super.prototype.connect.call(this, signer);
    };
    DelegatedOwnable__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    DelegatedOwnable__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    DelegatedOwnable__factory.bytecode = _bytecode;
    DelegatedOwnable__factory.abi = _abi;
    return DelegatedOwnable__factory;
}(ethers_1.ContractFactory));
exports.DelegatedOwnable__factory = DelegatedOwnable__factory;
