﻿import {updateQuality} from "../src/shop";

describe("The update item function", () => {
   describe("updates the sell in property", () => {
       it("keeping constant for legendary items", () => {
           // arrange
           const items = [
               { name: "Sulfuras, Hand of Ragnaros", sellIn: 10, quality: 20 },
           ];
           
           // act
           const updatedItems = updateQuality(items);
           
           // assert
           expect(updatedItems[0].sellIn).toBe(10);
       })
       
       it("decreases value by one for regular items", () => {
           const items = [{ name: "Regular Item", sellIn: 10, quality: 20 }];
           const updatedItems = updateQuality(items);
           expect(updatedItems[0].sellIn).toBe(9);
       })
       
       it("still decreases by one if negative", () => {
           const items = [{ name: "Regular Item", sellIn: 0, quality: 20 }];
           const updatedItems = updateQuality(items);
           expect(updatedItems[0].sellIn).toBe(-1);
       })
   })
    
    describe("updates the quality", () => {
        describe("of regular items", () => {
            it("by decreasing it by 1", () => {
                const items = [{ name: "Regular Item", sellIn: 10, quality: 20 }];
                const updatedItems = updateQuality(items);
                expect(updatedItems[0].quality).toBe(19);
            });

            it("doesn't decrease below zero", () => {
                const items = [{ name: "Regular Item", sellIn: 10, quality: 0 }];
                const updatedItems = updateQuality(items);
                expect(updatedItems[0].quality).toBe(0);
            });
        })
    })
});