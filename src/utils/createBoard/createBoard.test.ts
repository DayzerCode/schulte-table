import "@testing-library/react";
import { SymbolTypeEnum } from "../../entities/enum/symbolTypeEnum";
import { createBoard } from "./createBoard";

describe('createBoard util', () => {
    test('correct values', () => {
        expect(createBoard({ size: 2, symbolType: SymbolTypeEnum.NUMBERS, isInverted: false }))
            .toEqual([1, 2, 3, 4]);

        expect(createBoard({ size: 2, symbolType: SymbolTypeEnum.ENGLISH_LETTERS, isInverted: false }))
            .toEqual(['a', 'b', 'c', 'd']);

        expect(createBoard({ size: 2, symbolType: SymbolTypeEnum.NUMBERS, isInverted: true }))
            .toEqual([4, 3, 2, 1]);

        expect(createBoard({ size: 2, symbolType: SymbolTypeEnum.ENGLISH_LETTERS, isInverted: true }))
            .toEqual(['d', 'c', 'b', 'a']);

        expect(createBoard({ size: 0, symbolType: SymbolTypeEnum.ENGLISH_LETTERS, isInverted: false }))
            .toEqual([]);
    });

    test('incorrect values', () => {
        expect(createBoard({ size: 3, symbolType: SymbolTypeEnum.NUMBERS, isInverted: false }))
            .not.toEqual([1, 2, 3, 4]);

        expect(createBoard({ size: 1, symbolType: SymbolTypeEnum.ENGLISH_LETTERS, isInverted: false }))
            .not.toEqual(['a', 'b', 'c', 'd']);

        expect(createBoard({ size: 2, symbolType: SymbolTypeEnum.NUMBERS, isInverted: true }))
            .not.toEqual([1, 2, 3, 4]);

        expect(createBoard({ size: 2, symbolType: SymbolTypeEnum.ENGLISH_LETTERS, isInverted: true }))
            .not.toEqual(['a', 'b', 'c', 'd']);

        expect(createBoard({ size: 0, symbolType: SymbolTypeEnum.ENGLISH_LETTERS, isInverted: false }))
            .not.toEqual([1, 2, 3]);
    });
});