
const ExpressError = require('./expresserror')
class MyMath {
    constructor(nums) {
        try{
        const numbers=[]
        for(let num of nums.split(',')){
            const number = parseInt(num)
            if (isNaN(number)){
                throw new ExpressError(`${num} is not a number.`, 400)
            }
            numbers.push(number);
        }
        this.nums = numbers.sort(function(a, b){return a-b});
    }catch(e){
        return e;
    }
    }
    
    mean() {
        let total=0;
        for (let number of this.nums) {
            total+=number;
        }
        const theMean= total/this.nums.length;

        return {
            response: {
                operation: 'mean',
                numbers: this.nums,
                value: theMean
            }
        }
    }

    median() {
        const midpoint = this.nums.length/2
        let theMedian = 0;
        if (midpoint %1 !== 0){
            theMedian = (this.nums[midpoint-0.5] + this.nums[midpoint+0.5])/2;
        }else{
            theMedian = this.nums[midpoint]
        }
        return {
            response: {
                operation: 'median',
                numbers: this.nums,
                value: theMedian
            }
        }
    }
    
    most() {
        let theMost = 0;
        for (let num of this.nums) {            
            let count = 0
            for(let num2 of this.nums){
                if (num === num2){
                count++;
                }
            }
            if (count>theMost){
                theMost = num
            }
        }
        return {
            response: {
                operation: 'most',
                numbers: this.nums,
                value: theMost
            }
        }
    }
  }
  module.exports = MyMath;